const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getDrinkType = (request, response) => {
  pool.query('SELECT * FROM drink_type ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDrinkTypeById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM drink_type WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDrinkType = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO drink_type (drink_id, drink_name, drink_type) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`DrinkType added with ID: ${result.insertId}`)
  })
}

const updateDrinkType = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE drink_type SET name = $1, pass = $2 WHERE id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`DrinkType modified with ID: ${id}`)
    }
  )
}

const deleteDrinkType = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM drink_type WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`DrinkType deleted with ID: ${id}`)
  })
}


module.exports = {
  getDrinkTypes,
  getDrinkTypeById,
  createDrinkType,
  updateDrinkType,
  deleteDrinkType,
}