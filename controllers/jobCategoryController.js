const JobCategory = require('../models/jobCategory');

// Get all job categories
exports.getJobCategories = async (req, res) => {
  try {
    const jobCategories = await JobCategory.find();
    res.json(jobCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific job category
exports.getJobCategory = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findById(req.params.id);
    if (jobCategory == null) {
      return res.status(404).json({ message: 'Job Category not found' });
    }
    res.json(jobCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job category
exports.createJobCategory = async (req, res) => {
  const jobCategory = new JobCategory({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newJobCategory = await jobCategory.save();
    res.status(201).json(newJobCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a job category
exports.updateJobCategory = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findById(req.params.id);
    if (jobCategory == null) {
      return res.status(404).json({ message: 'Job Category not found' });
    }

    if (req.body.name != null) {
      jobCategory.name = req.body.name;
    }
    if (req.body.description != null) {
      jobCategory.description = req.body.description;
    }

    const updatedJobCategory = await jobCategory.save();
    res.json(updatedJobCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job category
exports.deleteJobCategory = async (req, res) => {
  try {
    const jobCategory = await JobCategory.findById(req.params.id);
    if (jobCategory == null) {
      return res.status(404).json({ message: 'Job Category not found' });
    }

    await jobCategory.remove();
    res.json({ message: 'Job Category deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
