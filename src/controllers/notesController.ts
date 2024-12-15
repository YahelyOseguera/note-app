// src/controllers/noteController.ts

import { Request, Response } from 'express';
import { Note, getNotes, getNoteById, createNote, updateNote, deleteNote } from '../models/notesModel';

// get all notes
export const getAllNotes = (req: Request, res: Response) => {
  const notes = getNotes();  
  res.render('notes', { notes });  
};

// get note by id
export const getNoteDetails = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);  
  const note = getNoteById(id);
  
  if (!note) {
    return res.status(404).send('Nota no encontrada');
  }

  res.render('/notes/edit', { note });  
};


  

// create new note
export const createNewNote = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newNote: Note = {
    id: Date.now(), 
    title,
    content
  };

  createNote(newNote); 
  res.redirect('/notes');  
};

// Editar una nota
export const updatedNote = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const updatedNote: Note = {
    id,
    title,
    content
  };

  const result = updateNote(id, updatedNote);  

  if (!result) {
    res.status(404).send('Nota no encontrada');
  } else {
    res.redirect('/notes'); 
  }
};


// Eliminar una nota
export const deleteNoteById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteNote(id);  
  res.redirect('/notes');  
};
