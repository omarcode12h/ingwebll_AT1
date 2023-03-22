const mongoose=require('mongoose')

const marcaSchema=mongoose.Schema(
    {
        nombre:{
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
    
    
     fechaActualizacion:{
            type: Date,
            default: Date.now()
           },
      
    }
)

    module.exports = mongoose.model('marca', marcaSchema)