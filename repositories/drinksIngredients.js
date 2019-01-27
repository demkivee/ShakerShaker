const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getDrinkIngredient = (request, response) => {
  pool.query('SELECT * FROM drinks_ingredients ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { title: 'drinksIngredients', rows: JSON.stringify(results.rows) });
  })
}

const getDrinkIngredientById = (request, response) => {
  const drink_id = parseInt(request.params.drink_id)
  const ingredient_id = parseInt(request.params.ingredient_id)

  pool.query('SELECT * FROM drinks_ingredients WHERE drink_id = $1 AND ingredient_id = 2$', [drink_id, ingredient_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createDrinkIngredient = (request, response) => {
  const { drink_id, ingredient_id } = request.body

  pool.query('INSERT INTO drinks_ingredients (drink_id, ingredient_id) VALUES ($1, $2)', [drink_id, ingredient_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`DrinkIngredient connection added`)
  })
}

const deleteDrinkIngredient = (request, response) => {
  const drink_id = parseInt(request.params.drink_id)
  const ingredient_id = parseInt(request.params.ingredient_id)

  pool.query('DELETE FROM drinks_ingredients WHERE drink_id = $1 AND ingredient_id = 2$', [drink_id, ingredient_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`DrinkIngredient deleted with ID: ${id}`)
  })
}


module.exports = {
  getDrinkIngredient,
  getDrinkIngredientById,
  createDrinkIngredient,
  deleteDrinkIngredient,
}