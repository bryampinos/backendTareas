const tareaRepository = require('../repository/tareaRepository')
const Tarea = require('../model/tareaModel')

const { Op } = require('sequelize');
//logica para la creacion de las tareas 
const registrar = async (tarea) => {
    if (!tarea.tituloTarea ) {
      throw new Error('Faltan datos obligatorios de la tarea');
    }
    try {
      tarea.estadoTarea="Pendiente";
      return await tareaRepository.createTarea(tarea);
    } catch (error) {
      throw new Error('Error al registrar la tarea', error);
    }
  };
  
  //Logica para regresar todas las tareas creadas 
  const getAllTareas = async()=>{
    try {
        return await tareaRepository.fetchAll();
    } catch (error) {
        throw new Error('Error al obtoner los cursos : ' , error.message);
    }
  }
//Logica para completar la tarea 
const completar = async (id) => {
  if (!id) {
    throw new Error('ID de la tarea es requerido');
  }

  try {
    return await tareaRepository.tareaCompletada(id);
  } catch (error) {
    throw new Error('Error al completar la tarea', error);
  }
};
//Logica para eliminar la tarea 
  const eliminar = async (id) => {
    if (!id) {
      throw new Error('ID de la tarea es requerido');
    }
  
    try {
      return await tareaRepository.deleteTarea(id);
    } catch (error) {
      throw new Error('Error al eliminar la tarea', error);
    }
  };

  const obtenerTareasActivas = async () => {
    return await Tarea.findAll({ where: { estadoTarea: { [Op.ne]: 'eliminada' } } });
  };


  


  module.exports = { registrar , getAllTareas, eliminar,obtenerTareasActivas,completar};