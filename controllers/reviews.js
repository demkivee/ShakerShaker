var express = require('express');
var router = express.Router();

const review = require('../repositories/reviews')

router.get('/', review.getReviews)
router.get('/:id', review.getReviewById)
router.post('/', review.createReview)
router.put('/:id', review.updateReview)
router.delete('/:id', review.deleteReview)

module.exports = router;