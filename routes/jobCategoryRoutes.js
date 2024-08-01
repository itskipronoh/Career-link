const express = require('express');
const router = express.Router();
const jobCategoryController = require('../controllers/jobCategoryController');

router.get('/', jobCategoryController.getJobCategories);
router.get('/:id', jobCategoryController.getJobCategory);
router.post('/', jobCategoryController.createJobCategory);
router.patch('/:id', jobCategoryController.updateJobCategory);
router.delete('/:id', jobCategoryController.deleteJobCategory);

module.exports = router;
