import mongoose from "mongoose";

const PresentSchema = new mongoose.Schema({
    idAula: {
        type: String,
        required: true
    },
    presentes: {},
})
export const Present = mongoose.model('present', PresentSchema)