// DEFINICIÓN DE CONSTANTES
const { Router } = require('express');
const ROUTER = Router();

//IMPORTACIÓN DE FUNCIONES DESDE CONTROLLER
const { getUsers, createUsers, getUserById, deleteUser, updateUser } = require('../controller/controller.js');
// DEFINCIÓN DE RUTAS
ROUTER.get('/users', getUsers);
ROUTER.get('/users/:id', getUserById);
ROUTER.post('/users', createUsers);
ROUTER.delete('/users/:id', deleteUser);
ROUTER.put('/users/:id', updateUser);

// EXPORTACIÓN DE ROUTER
module.exports = ROUTER;
