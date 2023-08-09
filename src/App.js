import Navbar from "./components/Navbar";
import AddNotes from "./components/AddNotes";
import NotesLogs from "./components/NotesLogs";
import { useState } from "react";

export default function App() {
  const [notes, AddNote] = useState([]);

  return (
    <>
      <Navbar />
      <AddNotes notes={notes} AddNote={AddNote} />
      <h2>Notes</h2>
      {notes.map(( note,index) => {
        return <NotesLogs index={index} title={note.title} description={note.description} />;
      })}
    </>
  );
}
