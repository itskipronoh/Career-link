const mongoose = require('mongoose');

const jobCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

module.exports = mongoose.model('JobCategory', jobCategorySchema);
