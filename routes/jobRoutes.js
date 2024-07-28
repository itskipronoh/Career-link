const express = require('express');
const router = express.Router();
const jobController = require('../controllers/JobController');

router.get('/jobs', jobController.getAllJobs);
router.post('/jobs', jobController.createJob);
router.get('/jobs/:id', jobController.getJobById);
router.put('/jobs/:id', jobController.updateJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
