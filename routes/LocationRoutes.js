const express = require('express');
const router = express.Router();
const locationController = require('../controllers/LocationController');

router.get('/', locationController.getLocations);
router.get('/:id', locationController.getLocation);
router.post('/', locationController.createLocation);
router.patch('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
