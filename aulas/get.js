import { Aula } from "./schemaAula.js"

export const getAula = async () => {
    try {
        return await Aula.find()
    } catch (error) {
        console.log('erro ao buscar as Aulas', error.message)
        throw error
    }
}