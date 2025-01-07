import { useState } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Stats from "./components/Stats";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  function handleToggleDone(id) {
    setNotes((notes) => {
      return notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            done: !note.done,
          };
        }
        return note;
      });
    });
  }

  function handleDeleteNotes() {
    const confirmed = window.confirm(
      "apakah anda yakin ingin menghapus semua catatan?"
    );
    if (confirmed) {
      setNotes([]);
    }
  }

  return (
    <div className="max-w-md m-auto bg-slate-800 text-slate-300 rounded-md overflow-hidden">
      <Logo />
      <Form onAddItem={handleAddNote} />
      <Checklist
        notes={notes}
        onDeleteItem={handleDeleteNote}
        onToggleDone={handleToggleDone}
        onDeleteItems={handleDeleteNotes}
      />
      <Stats notes={notes} />
    </div>
  );
}

export default App;
