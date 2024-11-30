const Submission = require("../Models/Submission");

// Get all submissions
exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new submission
exports.createSubmission = async (req, res) => {
  const { name, email, dob, department, comments } = req.body;
  try {
    const newSubmission = new Submission({ name, email, dob, department, comments });
    await newSubmission.save();
    io.emit('newSubmission', newSubmission);
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a submission
exports.updateSubmission = async (req, res) => {
  try {
    const updatedSubmission = await Submission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSubmission) return res.status(404).json({ message: "Submission not found" });
    res.status(200).json(updatedSubmission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a submission
exports.deleteSubmission = async (req, res) => {
    console.log("Deleting submission with ID:", req.params.id); // Log the incoming ID
    try {
      const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
      if (!deletedSubmission) return res.status(404).json({ message: "Submission not found" });
      res.status(200).json({ message: "Submission deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  