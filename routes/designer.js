const express = require('express');
const router = express.Router();
const Designer = require('../models/Designer'); 

// GET all designers
router.get('/designers', async (req, res) => {
  try {
    const designers = await Designer.find();
    res.json(designers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific designer by ID
router.get('/designers/:id', async (req, res) => {
  try {
    const designer = await Designer.findById(req.params.id);
    res.json(designer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new designer
router.post('/designers', async (req, res) => {
  const designer = new Designer(req.body);

  try {
    const newDesigner = await designer.save();
    res.status(201).json(newDesigner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a designer by ID
router.patch('/designers/:id', async (req, res) => {
  try {
    const updatedDesigner = await Designer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDesigner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
