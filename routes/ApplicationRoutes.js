const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/ApplicationController');

router.get('/applications', applicationController.getAllApplications);
router.post('/applications', applicationController.createApplication);
router.get('/applications/:id', applicationController.getApplicationById);
router.put('/applications/:id', applicationController.updateApplication);
router.delete('/applications/:id', applicationController.deleteApplication);

module.exports = router;
