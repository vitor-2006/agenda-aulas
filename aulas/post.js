import { Aula } from "./schemaAula.js"
import { verificarDataEstrutura } from "./verificar.js"

export const createAula = async (idProfessor, data, assunto) => {
    try {
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const newAula = new Aula({ idProfessor, data, assunto })
        return await newAula.save()
    } catch (error) {
        console.error('Erro ao criar Aula', error.message)
        throw error
    }
}