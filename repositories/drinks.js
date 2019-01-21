const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getDrinkss = (request, response) => {
  pool.query('SELECT * FROM drinks ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDrinksById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM drinks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDrinks = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO drinks (drink_id, drink_name, drink_type) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Drinks added with ID: ${result.insertId}`)
  })
}

const updateDrinks = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE drinks SET name = $1, pass = $2 WHERE id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Drinks modified with ID: ${id}`)
    }
  )
}

const deleteDrinks = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM drinks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Drinks deleted with ID: ${id}`)
  })
}


module.exports = {
  getDrinkss,
  getDrinksById,
  createDrinks,
  updateDrinks,
  deleteDrinks,
}