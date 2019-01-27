const Pool = require('pg').Pool
var dbconfig = require('../config/config')
const pool = new Pool({
  user: dbconfig.development.username,
  host: dbconfig.development.host,
  database: dbconfig.development.database,
  password: dbconfig.development.password,
  port: dbconfig.development.port,
})


const getReviewMark = (request, response) => {
  pool.query('SELECT * FROM review_marks ORDER BY review_mark_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    // response.status(200).json(results.rows)
    response.render('tableView', { title: 'reviewMarks', rows: JSON.stringify(results.rows) });
  })
}

const getReviewMarkById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM review_marks WHERE review_mark_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createReviewMark = (request, response) => {
  const name  = request.body

  pool.query('INSERT INTO review_marks (review_mark_id, review_mark) VALUES ($1, $2)', [id, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`ReviewMark added with ID: ${result.insertId}`)
  })
}

const updateReviewMark = (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body

  pool.query(
    'UPDATE review_marks SET review_mark = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`ReviewMark modified with ID: ${id}`)
    }
  )
}

const deleteReviewMark = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM review_marks WHERE review_mark_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`ReviewMark deleted with ID: ${id}`)
  })
}


module.exports = {
  getReviewMark,
  getReviewMarkById,
  createReviewMark,
  updateReviewMark,
  deleteReviewMark,
}