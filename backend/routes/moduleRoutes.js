import express from "express";
const router = express.Router();
import {
  getModules,
  getModuleById,
  createModule,
  postNewNote,
} from "../controllers/moduleController.js";

router.route("/").get(getModules);

router.route("/:id").get(getModuleById);

router.route("/create").post(createModule);

router.route("/:id/notes").post(postNewNote);

export default router;
