const Pool = require('pg').Pool
const drinksIngredientsModel = require('../models/drinks_ingredients')
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
    response.render('tableView', { 
      title: 'drinksIngredients', 
      rows: JSON.stringify(results.rows),
      scheme: JSON.stringify(drinksIngredientsModel.scheme())
    });
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
  const drink_id = request.body.drink_id
  const ingredient_id = request.body.ingredient_id


  pool.query('INSERT INTO drinks_ingredients (drink_id, ingredient_id) VALUES ($1, $2)', [drink_id, ingredient_id], (error, results) => {
    if (error) {
      throw error
    }
    getDrinkIngredient(request, response);
  })
}

const updateDrinkIngredient = (request, response) => {
  const drink_id = parseInt(request.params.drink_id)
  const ingredient_id = parseInt(request.params.ingredient_id)
  var new_drink_id = request.body.drink_id,
  new_ingredient_id = request.body.ingredient_id;

  pool.query(
    'UPDATE drink_ingredients SET drink_id = $1, ingredient_id = $2 WHERE drink_id = $3 AND ingredient_id = $4',
    [drink_id, ingredient_id, new_drink_id, new_ingredient_id],
    (error, results) => {
      if (error) {
        throw error
      }
      getDrinkIngredient(request, response);
    }
  )
}

const deleteDrinkIngredient = (request, response) => {
  const drink_id = parseInt(request.params.drink_id)
  const ingredient_id = parseInt(request.params.ingredient_id)

  pool.query('DELETE FROM drinks_ingredients WHERE drink_id = $1 AND ingredient_id = 2$', [drink_id, ingredient_id], (error, results) => {
    if (error) {
      throw error
    }
    getDrinkIngredient(request, response);
  })
}


module.exports = {
  getDrinkIngredient,
  getDrinkIngredientById,
  createDrinkIngredient,
  updateDrinkIngredient,
  deleteDrinkIngredient,
}