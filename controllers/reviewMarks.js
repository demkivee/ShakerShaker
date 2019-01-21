var express = require('express');
var router = express.Router();

const reviewMark = require('../repositories/reviewMarks')

router.get('/', reviewMark.getReviewMarks)
router.get('/:id', reviewMark.getReviewMarkById)
router.post('/', reviewMark.createReviewMark)
router.put('/:id', reviewMark.updateReviewMark)
router.delete('/:id', reviewMark.deleteReviewMark)

module.exports = router;