const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Nome: {
        type: String,
        Required: true
    },
    Sobrenome: {
        type: String,
        Required: true
    },
    Peso: {
        type: Number,
        Required: true
    },
    Altura: {
        type: Number,
        Required: true
    },
    PressaoArterial: {
        type: String,
        Required: true
    },
    Saturacao: {
        type: Number,
        Required: true
    },
    Cpf: {
        type: Number,
        Required: true
    },
    Nascimento: {
        type: Date,
        Required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);