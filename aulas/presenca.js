import { Present } from "./schemaPresent.js"
import { verificPorIdAula } from "./verificar.js"

export const createPresent = async (id, idAula, presencas) => {
    try {
        const arrayAula = verificPorIdAula(id)
        if(arrayAula.length === 0) {
            return false
        }
        if(id !== idAula) {
            return false
        }
        const newPresent = new Present({ idAula, presencas })
        return await newPresent.save()
    } catch (error) {
        console.error('Erro ao criar Presença', error.message)
        throw error
    }
}