import { Note } from "../../types/note";

const notes: Note[] = [];

const createNote = (note: Note, notes: Note[]) => {
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
};

export default createNote;
