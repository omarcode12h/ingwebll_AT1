const estadoEquipo= require('../models/estadoEquipos')


const ObtenerEstado = async (req, res, next)=>{
    let estado;
    try{
        estado = await estadoEquipo.find();
    }catch (eror){
        return next(error)
    }if(!estado){
        return res.status(500).json({message: 'Error en el Servido '})
    }
    return res.status(200).json({estado})

}

//agregar

const addEquipo= async(req, res, next)=>{
    const {nombre,estado,fechaCrea,fechaAct} = req.body;

if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="" && !fechaCrea && fechaCrea.trim()=="")
{
    return res.status(422).json({message: "Datos Ivalidos"});

}

    let estados;
    try {
        estados=new estadoE({
            nombre,
            estado,
           
        });

        estados=await estados.save();

    } catch (error) {
        return next(error);
    }
    if(!estados){
    return res.status(500).json({message: "Error  del Servidor"})
    
    
    }
    return res.status(201).json({estados})
    
    }


    //funcion para actualizar
    const updateEstadoEquipo= async (req , res, next) => {
        const id= req.params.ide


        const {nombre, estado}= req.body

        if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
        {
            return res.status(422).json({message: "Eror datos Ivalidos"});
        
        }
        
            let estados;
            try {
                
                estados=await estadoE.findByIdAndUpdate(id,{
                    nombre,
                    estado,
                    fechaAct:Date.now()
                });
        
                console.log(estados);
            } catch (error) {
                return next(error);
            }
            if(!estados){
            return res.status(500).json({message: "Error en el  servidor"})
            
            
            }
            return res.status(200).json({message: "Datos actualizados correctamente"})
            
    }

    // funciones para borrar

    const deleteequipo =async(req, res, next)=>{
        const id= req.params.id;
    let estados;

    try {
        
        estados=await estadoE.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!estados){
    return res.status(500).json({message: "Error, no se pudo borrar los datos"})
    
    
    }
    return res.status(200).json({message: "Los datos fueron borrados correctamente"})
    
    }




    

    exports.ObtenerEstado=ObtenerEstado
    exports.addEquipo=addEquipo
    exports.updateEstadoEquipo=updateEstadoEquipo
    exports.deleteequipo=deleteequipo