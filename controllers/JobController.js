const Job = require('../models/job');

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new job
exports.createJob = async (req, res) => {
  const job = new Job({
    title: req.body.title,
    company: req.body.company,
    description: req.body.description,
    location: req.body.location,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (req.body.title != null) {
      job.title = req.body.title;
    }
    if (req.body.company != null) {
      job.company = req.body.company;
    }
    if (req.body.description != null) {
      job.description = req.body.description;
    }
    if (req.body.location != null) {
      job.location = req.body.location;
    }

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Job not found' });
    }

    await job.remove();
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
