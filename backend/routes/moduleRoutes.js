import express from "express";
const router = express.Router();
import {
  getModules,
  getModuleById,
  createModule,
  postNewNote,
  postNoteUpdate,
} from "../controllers/moduleController.js";

router.route("/").get(getModules);

router.route("/:id").get(getModuleById);

router.route("/create").post(createModule);

router.route("/:id/notes").post(postNewNote);

router.route("/:id/notes/update").post(postNoteUpdate);

export default router;
