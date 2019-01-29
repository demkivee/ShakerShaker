const Pool = require('pg').Pool
const userModel = require('../models/users')
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})



const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    //response.status(200).json(results.rows)
    response.render('tableView', {
      title: 'users',
      rows: JSON.stringify(results.rows),
      scheme: JSON.stringify(userModel.scheme())
    });
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  var id = request.body.user_id,
    name = request.body.user_name,
    pass = request.body.user_pass;
  console.log(request.body)
  console.log(request.body.user_name)
  console.log(name)
  pool.query('INSERT INTO users (user_id, user_name, user_pass) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${id}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  var name = request.body.user_name,
  pass = request.body.user_pass;

  pool.query(
    'UPDATE users SET user_name = $1, user_pass = $2 WHERE user_id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}