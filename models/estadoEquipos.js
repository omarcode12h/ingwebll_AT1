//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const TipoequipoSchema= mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true
        },
        estado:{
            type: String,
            required: true,
    
        },
    
        fechaCreacion:{
            type: Date,
            default: Date.now()
           },
    
    
     fechaActualizacion:{
            type: Date,
            default: Date.now()
           },

    }
)

module.exports = mongoose.model('estadoEquipos', TipoequipoSchema )