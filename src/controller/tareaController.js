const tareaService = require('../service/tareaService');
const wss = require('C:/Users/bryam/OneDrive/Escritorio/taskBackend/index');
//interacion con el body de la peticion para la creacion de la tarea 
const registrarTarea = async (req, res) => {
  try {
    const tarea = await tareaService.registrar(req.body);
    res.json({ message: "tarea registrada", tarea });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
//interacion con la peticion para la obtencion de las tareas 
const getTareas = async (req, res)=>{
    try {
    res.json(await tareaService.getAllTareas())
    } catch (error) {
        
    }
}
const completarTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const tarea = await tareaService.completar(id);
    res.json({ message: 'Tarea completada correctamente', tarea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Interactuar con la petcion para eliminar la tareas 
const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const tarea = await tareaService.eliminar(id);
    res.json({ message: 'Tarea eliminada correctamente', tarea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  const  activas =async (req,res)=>{
try {
  res.json(await tareaService.obtenerTareasActivas() );
} catch (error) {
  
}
  }

 

module.exports = { registrarTarea, getTareas, eliminarTarea,activas,completarTarea};