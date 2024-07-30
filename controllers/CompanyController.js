const Company = require('../models/company');

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new company
exports.createCompany = async (req, res) => {
  const company = new Company({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    website: req.body.website,
    dateFounded: req.body.dateFounded,
  });

  try {
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (company == null) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a company by ID
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (company == null) {
      return res.status(404).json({ message: 'Company not found' });
    }

    if (req.body.name != null) {
      company.name = req.body.name;
    }
    if (req.body.location != null) {
      company.location = req.body.location;
    }
    if (req.body.description != null) {
      company.description = req.body.description;
    }
    if (req.body.website != null) {
      company.website = req.body.website;
    }

    const updatedCompany = await company.save();
    res.json(updatedCompany);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a company by ID
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (company == null) {
      return res.status(404).json({ message: 'Company not found' });
    }

    await company.remove();
    res.json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
