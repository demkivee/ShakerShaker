const Pool = require('pg').Pool
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
    response.render('tableView', { title: 'users', rows: JSON.stringify(results.rows) });
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
  const { id, name, pass } = request.body

  pool.query('INSERT INTO users (user_id, user_name, user_pass) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, pass } = request.body

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