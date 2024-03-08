// DECLARACIÓN DE CONSTANTES
const EXPRESS = require('express');
const APP = EXPRESS();
const PUERTO = process.env.PORT || 3000; // Con process.env.PORT consigue el puerto en el ambiente, desde donde se está ejecutando la aplicación de Node.js

// DEFINICIÓN DE MIDLEWARES
APP.use(EXPRESS.json()); //Permite comprender los datos enviados por el cliente en formato json.
APP.use(EXPRESS.urlencoded({ extended: false })); //Permite comprender los datos enviados por el cliente desde un formulario.

// ASIGNACIÓN DE RUTAS --> Que se importa desde el archivo ubicado en la carpeta routes
APP.use(require('./routes/routes.js'));
//AISGNACIÓN DE PUERTO
APP.listen(PUERTO, () => {
  console.log(`Server on port:${PUERTO}`);
});