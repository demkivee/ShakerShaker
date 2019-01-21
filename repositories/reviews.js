const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getReviews = (request, response) => {
  pool.query('SELECT * FROM reviews ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReviewsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM reviews WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createReviews = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO reviews (drink_id, drink_name, reviews) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Reviews added with ID: ${result.insertId}`)
  })
}

const updateReviews = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE reviews SET name = $1, pass = $2 WHERE id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Reviews modified with ID: ${id}`)
    }
  )
}

const deleteReviews = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM reviews WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Reviews deleted with ID: ${id}`)
  })
}


module.exports = {
  getReviewss,
  getReviewsById,
  createReviews,
  updateReviews,
  deleteReviews,
}