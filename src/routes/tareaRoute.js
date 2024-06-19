const express = require('express');
const router = express.Router();
const tareaController=require('../controller/tareaController')

router.post('/registrar', tareaController.registrarTarea)
router.get('/all', tareaController.getTareas)
router.put('/eliminar/:id', tareaController.eliminarTarea);
router.get('/tareasActivas',tareaController.activas)
router.put('/completar/:id', tareaController.completarTarea);


module.exports = router;