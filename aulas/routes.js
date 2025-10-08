import express from 'express'
import { getAula } from './get.js'
import { createAula } from './post.js';
import { updateAula } from "./put.js"
import { deleteAula } from './delete.js';

const routesAula  = express.Router();

routesAula.get('/aula', async (req, res) => {
    const Aulas = await getAula()
    if(Aulas) {
        return res.status(200).send(Aulas)
    } else {
        return res.status(404).send({ message: 'não têm Aulas registradas' })
    }
});

routesAula.post('/aula', async (req, res) => {
    const { idProfessor, data, assunto } = req.body
    const newAula = await createAula(idProfessor, data, assunto)
    if(!newAula) {
        return res.status(400).send("Aula inválida!")
    }
    return res.status(201).send({ message: 'Aula criada com sucesso', aula: newAula })
});

routesAula.put('/aula/:id', async (req, res) => {
    const { id } = req.params
    const { idProfessor, data, assunto } = req.body
    const updatedAula = await updateAula(id, idProfessor, data, assunto)
    if(updatedAula) {
        return res.status(200).send({ message: 'Aula atualizada com sucesso', aula: updatedAula })
    } else {
        return res.status(404).send({ message: 'Aula não encontrada ou inválida' })
    }
});

routesAula.delete('/aula/:id', async (req, res) => {
    const { id } = req.params
    const deletedAula = deleteAula(id)
    if(deletedAula) {
        return res.status(200).send({ message:'Aula deletada com sucesso', aula: deletedAula })
    } else {
        return res.status(404).send({ message: 'Aula não encontrada' })
    }
});

export {routesAula}