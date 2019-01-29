const Pool = require('pg').Pool
const ingredientsModel = require('../models/ingredients')
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getIngredient = (request, response) => {
  pool.query('SELECT * FROM ingredients ORDER BY ingredient_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { 
      title: 'ingredients', 
      rows: JSON.stringify(results.rows),
      scheme: JSON.stringify(ingredientsModel.scheme())
    });
  })
}

const getIngredientById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM ingredients WHERE ingredient_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createIngredient = (request, response) => {
  const id = request.body.ingredient_id,
    name = request.body.ingredient_name;

  pool.query('INSERT INTO ingredients (ingredient_id, ingredient_name) VALUES ($1, $2)', [id, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Ingredient added with ID: ${id}`)
  })
}

const updateIngredient = (request, response) => {
  const id = parseInt(request.params.id)
  const name  = request.body.ingredient_name

  pool.query(
    'UPDATE ingredients SET ingredient_name = $1 WHERE ingredient_id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Ingredient modified with ID: ${id}`)
    }
  )
}

const deleteIngredient = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM ingredients WHERE ingredient_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Ingredient deleted with ID: ${id}`)
  })
}


module.exports = {
  getIngredient,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient,
}