import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    topic: { type: String, required: true },
    url: { type: String },
    embedded: { type: String },
  },
  {
    timestamps: true,
  }
);

const moduleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    examlenght: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
    },
    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", moduleSchema);

export default Module;
