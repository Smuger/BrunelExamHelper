import Module from "../models/moduleModel.js";
import asyncHandler from "express-async-handler";

// @desc Fetch all products
// @route GET /api/modules
// @access Public
const getModules = asyncHandler(async (req, res) => {
  const modules = await Module.find({});
  res.json(modules);
});

// @desc Fetch single product
// @route GET /api/modules/id
// @access Public
const getModuleById = asyncHandler(async (req, res) => {
  const module = await Module.findById(req.params.id);
  if (module) {
    res.json(module);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create new review
// @route   POST /api/modules/:id/notes
// @access  Private
const postNewNote = asyncHandler(async (req, res) => {
  const { topic, docEdit, docEmbedded } = req.body;
  const module = await Module.findById(req.params.id);

  // Check is service was found
  if (module) {
    const newNote = {
      topic: topic,
      url: docEdit,
      embedded: docEmbedded,
      done: false,
    };

    module.notes.unshift(newNote);

    try {
      await module.save();
    } catch (error) {
      console.error("Module failed while saving: " + error);
    }

    res.status(201).json({ message: "Module added" });
  } else {
    res.status(404);
    throw new Error("Module not found");
  }
});

// @desc    Create new review
// @route   POST /api/modules/:id/notes/update
// @access  Private
const postNoteUpdate = asyncHandler(async (req, res) => {
  const { isDone, noteId } = req.body;

  const module = await Module.findById(req.params.id);

  // Check is service was found
  if (module) {
    const noteIndex = module.notes.findIndex((note) => note._id == noteId);
    module.notes[noteIndex].done = isDone;

    try {
      await module.save();
    } catch (error) {
      console.error("Module failed while saving: " + error);
    }

    res.status(201).json({ message: "Module updated" });
  } else {
    res.status(404);
    throw new Error("Module not found");
  }
});

// @desc    Create new service
// @route   POST /api/modules/create
// @access  Private
const createModule = asyncHandler(async (req, res) => {
  const { name, examlenght, date, time, description } = req.body;

  const module = new Module({
    name: name,
    description: description,
    examlenght: examlenght,
    date: date,
    time: time,
    notes: [],
  });

  try {
    await module.save();

    res.status(201).json({ message: "Module added" });
  } catch (error) {
    console.error("Creating module thrown following error: " + error);
    res.status(404);
    throw new Error("Unable to create service");
  }
});

export { getModules, getModuleById, createModule, postNewNote, postNoteUpdate };
