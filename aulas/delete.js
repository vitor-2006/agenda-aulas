import { Aula } from "./schemaAula.js"

export const deleteAula = async (id) => {
    try {
        return await Aula.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Aula:', error.message)
        throw error
    }
}