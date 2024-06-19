const Tarea = require('../model/tareaModel')
//Interaccion con la base de datos para la creacion de la tarea 
const createTarea = async (tarea)=>{
    return await Tarea.create(tarea)
}
//Interaccion con la base de datos para llamar todas las tareas 
const fetchAll =async()=>{
    try {
        return await Tarea.findAll();
    } catch (error) {
        throw new Error('Error al regresar las tareas ' + error.message);
    }
}
//Interaccion con la base de datos para eliminar logicamente la tarea
const deleteTarea = async (idTarea) => {
    try {
        const tarea = await Tarea.findByPk(idTarea);
        if (!tarea) {
          throw new Error('La tarea no existe');
        }
    
        tarea.estadoTarea = 'eliminada';
        await tarea.save();
    
        return tarea;
      } catch (error) {
        throw new Error('Error al eliminar la tarea', error);
      }
   
  };

  const tareaCompletada = async (idTarea) => {
    try {
        const tarea = await Tarea.findByPk(idTarea);
        if (!tarea) {
          throw new Error('La tarea no existe');
        }
    
        tarea.estadoTarea = 'completada';
        await tarea.save();
    
        return tarea;
      } catch (error) {
        throw new Error('Error al completar la tarea', error);
      }
   
  };
module.exports ={createTarea,fetchAll, deleteTarea,tareaCompletada}