import { Aula } from "./schemaAula.js"
import { Present } from "./schemaPresent.js" 

export const deleteAula = async (id) => {
    try {
        await deletePresencaPorAula(id)
        return await Aula.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Aula:', error.message)
        throw error
    }
}

const deletePresencaPorAula = async (idAula) => {
    try {
        return await Present.deleteMany({ idAula: idAula })
    } catch (error) {
        console.error('Erro ao deletar presenças:', error.message)
        throw error
    }
}