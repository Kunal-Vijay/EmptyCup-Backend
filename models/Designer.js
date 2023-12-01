const mongoose = require('mongoose');

const designerSchema = new mongoose.Schema({
  name: String,
  desc: String,
  rating: Number,
  projects: Number,
  Years: Number,
  Price: Number,
  Phone1: String,
  Phone2: String,
  shortlisted: Boolean,
});

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;
