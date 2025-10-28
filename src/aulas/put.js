import { Aula } from "./schemaAula.js"
import { verificarDataEstrutura } from "./verificar.js"

export const updateAula = async (id, idProfessor, data, assunto) => {
    try {
        const dataCerta = await verificarDataEstrutura(data)
        if(!dataCerta){
            return false
        }
        const updatedAula = await Aula.findByIdAndUpdate(
            id,
            { idProfessor, data, assunto },
            { new:true, runValidators:true }
        )
        return updatedAula
    } catch (error) {
        console.error('Erro ao atualizar Aula:', error.message)
        throw error
    }
}