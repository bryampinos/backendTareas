const express = require('express');
const tareaRoute = require('./src/routes/tareaRoute');
const bodyParser = require('body-parser');
const port =3000;
const http = require('http');
const app = express();

const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
//Rutas de entidades o negocios deferentes 
app.use('/tarea', tareaRoute)


app.use((err, req, res, next) => {
    console.error(err.stack);
    
    res.status(500).send({ error: 'Algo salió mal' });
  });
app.listen(port, () => console.log('Servidor corriendo correctamente en el puerto:', port));



