import mongoose from "mongoose";

const PresentSchema = new mongoose.Schema({
    idAula: {
        type: String,
        required: true
    },
    presencas: {
        type: [Object],
        required: true,
        idAluno: {
            type: Number,
            required: true
        },
        presente: {
            type: Boolean,
            required: true
        }
    }
})
export const Present = mongoose.model('present', PresentSchema)