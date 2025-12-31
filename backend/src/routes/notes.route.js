import { Router } from "express";
import { deleteNotes, getAllNotes, createNote, updateNotes, getOneNote } from "../controllers/notes.controller.js";
const router = Router();

router.get("/", getAllNotes);
router.get("/:id", getOneNote);
router.post("/", createNote);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
