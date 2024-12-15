// Define the Note interface
export interface Note {
    id: number;
    title: string;
    content: string;
  }
  
  // Define an initial array of notes
  export const notes: Note[] = [];
  
  // Function to get all notes
  export const getNotes = () => {
    return notes;
  }
  
  
  export const createNote = (note: Note) => {
    notes.push(note); // Mutates the notes array in place
  }
  
  // Function to delete a note by id (mutation with filter)
  export const deleteNote = (id: number) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.splice(index, 1); // Removes the note at the found index
    }
  }
  
  // Function to update an existing note (mutation with map)
  export const updateNote = (id: number, updatedNote: Note): boolean => {
    const index = notes.findIndex(note => note.id === id);
  
    if (index === -1) {
      return false; // Si no encuentra la nota, retorna false
    }
  
    notes[index] = updatedNote; // Si la encuentra, la actualiza
    return true; // Retorna true si la actualización fue exitosa
  };
  
  
  export const getNoteById = (id: number) => {
    return notes.find(note => note.id === id);
  }
  