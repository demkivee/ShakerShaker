const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getReview = (request, response) => {
  pool.query('SELECT * FROM reviews ORDER BY review_user, review_drink', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { title: 'reviews', rows: JSON.stringify(results.rows) })
  })
}

const getReviewById = (request, response) => {
  const review_user = parseInt(request.params.review_user)
  const review_drink = parseInt(request.params.review_drink)

  pool.query('SELECT * FROM reviews WHERE review_user = $1 AND review_drink = $2', 
    [review_user, review_drink], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createReview = (request, response) => {
  const { review_user, review_drink, review_mark, review_text } = request.body

  pool.query('INSERT INTO reviews (review_user, review_drink, review_mark, review_text) VALUES ($1, $2, $3,$4)',
    [review_user, review_drink, review_mark, review_text], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Review added`)
  })
}

const updateReview = (request, response) => {
  const review_user = parseInt(request.params.review_user)
  const review_drink = parseInt(request.params.review_drink)
  const { review_mark, review_text } = request.body

  pool.query(
    'UPDATE reviews SET review_mark = $1, review_text = $2 WHERE review_user = $3 AND review_drink = $4',
    [review_mark, review_text, review_user, review_drink],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Review modified`)
    }
  )
}

const deleteReview = (request, response) => {
  const review_user = parseInt(request.params.review_user)
  const review_drink = parseInt(request.params.review_drink)

  pool.query('DELETE FROM reviews WHERE review_user = $1 AND review_drink = $2', [review_user,review_drink], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Review deleted`)
  })
}


module.exports = {
  getReview,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
}