var express = require('express');
var router = express.Router();

const review = require('../repositories/reviews')

router.get('/', review.getReview)
router.get('/:review_user&:review_drink', review.getReviewById)
router.post('/', review.createReview)
router.put('/:review_user&:review_drink', review.updateReview)
router.delete('/:review_user&:review_drink', review.deleteReview)

module.exports = router;