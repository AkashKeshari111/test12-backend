const mongoose=require("mongoose")

const jobPostingSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    role: {
      type: String,
      enum: ["Frontend", "Backend", "FullStack"],
      required: true,
    },
    level: { type: String, enum: ["Junior", "Senior"], required: true },
    contract: {
      type: String,
      enum: ["Full Time", "Part Time"],
      required: true,
    },
    position: {
      type: String,
      enum: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
      required: true,
    },
    language: {
      type: String,
      enum: ["JavaScript", "Java", "C++", "Python"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JobPostingModel = mongoose.model("JobPosting", jobPostingSchema);

module.exports = {JobPostingModel};
