const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getReviewMarks = (request, response) => {
  pool.query('SELECT * FROM review_marks ORDER BY drink_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReviewMarksById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM review_marks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createReviewMarks = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO review_marks (drink_id, drink_name, review_marks) VALUES ($1, $2, $3)', [id, name, pass], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`ReviewMarks added with ID: ${result.insertId}`)
  })
}

const updateReviewMarks = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE review_marks SET name = $1, pass = $2 WHERE id = $3',
    [name, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`ReviewMarks modified with ID: ${id}`)
    }
  )
}

const deleteReviewMarks = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM review_marks WHERE drink_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`ReviewMarks deleted with ID: ${id}`)
  })
}


module.exports = {
  getReviewMarkss,
  getReviewMarksById,
  createReviewMarks,
  updateReviewMarks,
  deleteReviewMarks,
}