const mongoose= require('mongoose')

const tipoUsuarioSchema=mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
        },
    
        email:{
            type: String,
            required: true,
        },
    
        estado:{
            type: String,
            required: true,
    
        },
    
        fechaCrea:{
            type: Date,
            default: Date.now()
           },
    
    
     fechaAct:{
            type: Date,
            default: Date.now()
           },
         
    }
)

module.exports = mongoose.model('tipoUsuario',tipoUsuarioSchema)