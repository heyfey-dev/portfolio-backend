const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  dob: { type: Date, required: true },
  department: { type: String, required: true },
  comments: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("submission", submissionSchema);
