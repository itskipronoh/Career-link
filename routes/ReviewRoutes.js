const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/ReviewController');

router.get('/reviews', reviewController.getAllReviews);
router.post('/reviews', reviewController.createReview);
router.get('/reviews/:id', reviewController.getReviewById);
router.put('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);

module.exports = router;
