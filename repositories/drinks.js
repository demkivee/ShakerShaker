const Pool = require('pg').Pool
const drinksModel = require('../models/drinks')
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getDrink = (request, response) => {
  pool.query('SELECT * FROM drinks ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { 
      title: 'drinks', 
      rows: JSON.stringify(results.rows),
      scheme: JSON.stringify(drinksModel.scheme())
    });
  })
}

const getDrinkById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM drinks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDrink = (request, response) => {
  const name = request.body.drink_name,
    type  = request.body.drink_type

  pool.query('INSERT INTO drinks (drink_name, drink_type) VALUES ($1, $2)', [name, type], (error, results) => {
    if (error) {
      throw error
    }
    getDrink(request, response);
  })
}

const updateDrink = (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body.drink_name,
    type  = request.body.drink_type

  pool.query(
    'UPDATE drinks SET drink_name = $1, drink_type = $2 WHERE drink_id = $3',
    [name, type, id],
    (error, results) => {
      if (error) {
        throw error
      }
      getDrink(request, response);
    }
  )
}

const deleteDrink = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM drinks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    getDrink(request, response);
  })
}


module.exports = {
  getDrink,
  getDrinkById,
  createDrink,
  updateDrink,
  deleteDrink,
}