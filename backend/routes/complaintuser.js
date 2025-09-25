const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

router.post('/submit', async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.json(complaint);
});

router.get('/:userId', async (req, res) => {
  const complaints = await Complaint.find({ userId: req.params.userId });
  res.json(complaints);
});

router.put('/update/:id', async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
