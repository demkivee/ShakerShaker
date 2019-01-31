const Pool = require('pg').Pool
const userModel = require('../models/users')
var dbconfig = require('../config/config')
var md5 = require('md5');
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
  var name = request.body.user_name,
    pass = md5(request.body.user_pass);
  pool.query('INSERT INTO users (user_name, user_pass) VALUES ($1, $2)', [name, pass], (error, results) => {
    if (error) {
      throw error
    }
    getUsers(request, response);
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  var name = request.body.user_name,
  pass = md5(request.body.user_pass);

  pool.query(
    'UPDATE users SET user_name = $1, user_pass = $2 WHERE user_id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      getUsers(request, response);
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    getUsers(request, response);
  })
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}