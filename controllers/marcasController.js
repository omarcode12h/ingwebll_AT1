const marcaEquipos=require('../models/marca')

const ObtenerMarcas = async (req, res, next) =>{
    let marcas;
    try {
        marcas=await marcasEquipos.find();
    } catch (error) {
        return next(error);
    }
    if(!marcas){
    return res.status(500).json({message: "Error Interno del Servidor"})
    
    
    }
    return res.status(200).json({marcas})
    
}

 
const addMarcas= async (req, res, next) =>{
    const {nombre,estado,fechaCrea,fechaAct} = req.body;

    if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
    {
        return res.status(422).json({message: "Datos Ivalidos"});
    
    }
    
        let marcas;
        try {
            marcas=new marcaEquipos({
                nombre,
                estado,
               
            });
    
            marcas=await marcas.save();
    
        } catch (error) {
            return next(error);
        }
        if(!marcas){
        return res.status(500).json({message: "Error Interno del Servidor"})
        
        
        }
        return res.status(201).json({marcas})
           
}


const updateMarca = async() => {
    const id= req.params.id;


        const {nombre,estado,fechaAct} = req.body;
    
    if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
    {
        return res.status(422).json({message: "Datos Ivalidos"});
    
    }
    
        let marcas;
        try {
            
            marcas=await marcasEquipos.findByIdAndUpdate(id,{
                nombre,
                estado,
                fechaAct:Date.now()
            });
    
            console.log(marcas);
        } catch (error) {
            return next(error);
        }
        if(!marcas){
        return res.status(500).json({message: "Error Interno del Servidor"})
        
        
        }
        return res.status(200).json({message: "Datos Actualizados Correctamente"})
        
}

const deleteMarcas = async(req, res, next) =>{
    const id= req.params.id;
    let marcas;

    try {
        
        marcas=await marcasEquipos.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!marcas){
    return res.status(500).json({message: "No se pudo Borrar los Datos"})
    
    
    }
    return res.status(200).json({message: "Datos Borrados Correctamente"})
    
}

exports.ObtenerMarcas=ObtenerMarcas
exports.addMarcas=addMarcas
exports.updateMarca=updateMarca
exports.deleteMarcas=deleteMarcas