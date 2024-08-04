const Location = require('../models/location');

// Get all locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific location
exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new location
exports.createLocation = async (req, res) => {
  const location = new Location({
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a location
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: 'Location not found' });
    }

    if (req.body.city != null) {
      location.city = req.body.city;
    }
    if (req.body.state != null) {
      location.state = req.body.state;
    }
    if (req.body.country != null) {
      location.country = req.body.country;
    }

    const updatedLocation = await location.save();
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a location
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (location == null) {
      return res.status(404).json({ message: 'Location not found' });
    }

    await location.remove();
    res.json({ message: 'Location deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
