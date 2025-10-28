import mongoose from "mongoose";

const AulaSchema = new mongoose.Schema({
    idProfessor: {
        type: Number,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    assunto: {
        type: String,
        required: true
    }
})
export const Aula = mongoose.model('aula', AulaSchema)