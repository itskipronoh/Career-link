const Application = require('../models/application');

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('job user');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new application
exports.createApplication = async (req, res) => {
  const application = new Application({
    job: req.body.job,
    user: req.body.user,
    coverLetter: req.body.coverLetter,
    resume: req.body.resume,
  });

  try {
    const newApplication = await application.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('job user');
    if (application == null) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an application by ID
exports.updateApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (application == null) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (req.body.coverLetter != null) {
      application.coverLetter = req.body.coverLetter;
    }
    if (req.body.resume != null) {
      application.resume = req.body.resume;
    }

    const updatedApplication = await application.save();
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an application by ID
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (application == null) {
      return res.status(404).json({ message: 'Application not found' });
    }

    await application.remove();
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
