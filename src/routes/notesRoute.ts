import { Router } from "express";
import { getAllNotes, createNewNote, deleteNoteById, updatedNote } from "../controllers/notesController";

const router = Router();

// Ruta para obtener todas las notas
router.get("/", getAllNotes);

// Ruta para crear una nueva nota
router.post("/create", createNewNote);

// Ruta para eliminar una nota
router.get("/delete/:id", deleteNoteById);

// Ruta para actualizar una nota
router.post("/update/:id", updatedNote);



export default router;
