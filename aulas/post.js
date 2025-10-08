import { Aula } from "./schemaAula.js"

export const createAula = async (idProfessor, data, assunto) => {
    try {
        const newAula = new Aula({ idProfessor, data, assunto })
        return await newAula.save()
    } catch (error) {
        console.error('Erro ao criar Aula', error.message)
        throw error
    }
}