const Complaint = require('../models/Complaint');

const submitComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getComplaintsByUser = async (req, res) => {
  try {
    const complaints = await Complaint.find({ userId: req.params.userId });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { submitComplaint, getComplaintsByUser, updateComplaintStatus };
