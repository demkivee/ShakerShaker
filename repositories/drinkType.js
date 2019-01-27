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
  pool.query('SELECT * FROM drink_type ORDER BY type_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { title: 'drinkType', rows: JSON.stringify(results.rows) });
  })
}

const getDrinkTypeById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM type_id WHERE type_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDrinkType = (request, response) => {
  const name = request.body.type_name,
    id = request.body.type_id

  pool.query('INSERT INTO drink_type (type_id, type_name) VALUES ($1, $2)', [id, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`DrinkType added with ID: ${id}`)
  })
}

const updateDrinkType = (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body.type_name;

  pool.query(
    'UPDATE drink_type SET type_name = $1 WHERE id = $2',
    [name, id],
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

  pool.query('DELETE FROM drink_type WHERE type_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`DrinkType deleted with ID: ${id}`)
  })
}


module.exports = {
  getDrinkType,
  getDrinkTypeById,
  createDrinkType,
  updateDrinkType,
  deleteDrinkType,
}