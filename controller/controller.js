// DECLARACIÓN DE CONSTANTES
const { Pool } = require('pg');
// DECLARACIÓN DE CONSTANTE PARA ALMACENAR LA CONEXIÓN A LA BASE DE DATOS
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'firstapi',
});
// DECLARACIÓN DE FUNCIONES
//Función para traer todos los usuarios
const getUsers = async (req, res) => {
  const response = await pool.query('select * from users');
  res.status(200).json(response.rows);
};
//Función para obtener un usuario por id
const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('select * from users where id = $1', [id]);
  res.status(200).json(response.rows);
};
//Función para crear un nuevo usuario
const createUsers = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
  res.json({
    message: 'User added succesfully',
    body: {
      user: { name, email }
    }
  });

};
//Función para eliminar un usuario
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('delete from users where id = $1', [id]);
  res.json({
    message: 'User deleted succesfully',
  });
};
//Función para actualizar un usuario
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
  res.json({
    message: 'User update succesfully',
    body: {
      user: { id, name, email }
    }
  });
};

// EXPORTACIÓN DEL MÓDULO
module.exports = {
  getUsers,
  createUsers,
  getUserById,
  deleteUser,
  updateUser
};