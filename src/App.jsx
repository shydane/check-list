import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="max-w-md m-auto bg-slate-800 text-slate-300 rounded-md overflow-hidden">
      <Logo />
      <Form />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-slate-700 text-slate-300 text-4xl text-center font-semibold p-5 tracking-tighter">
      <h1>📝 GoCheck ✅</h1>
    </div>
  );
}

function Form() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, text: "sholat", done: false },
    { id: 2, text: "makan", done: false },
    { id: 3, text: "tidur", done: false },
    { id: 4, text: "belajar", done: false },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: title,
      };
      setNotes([...notes, newNote]);
      setTitle("");
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleDeleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <>
      <form
        className="bg-slate-600 text-slate-300 text-base text-center font-semibold p-3"
        onSubmit={handleSubmit}
      >
        <h2>Ada hal yang mau ditambahkan?</h2>
        <input
          className="m-4 rounded-xl text-black px-3 py-1"
          placeholder="Add a note"
          type="text"
          name="title"
          id=""
          value={title} // Mengikat nilai input ke state `title`
          onChange={handleInputChange} // Memperbarui state `title` saat nilai input berubah
        />
        <button className="bg-green-400 rounded-lg px-3 py-1 text-white">
          ADD
        </button>
      </form>
      <Checklist
        notes={notes}
        setNotes={setNotes}
        handleDeleteNote={handleDeleteNote}
      />
      <Stats notes={notes} />
    </>
  );
}

function Checklist({ notes, setNotes, handleDeleteNote }) {
  const toggleDone = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <div>
      <ul className="font-semibold p-5">
        {notes.map((note) => (
          <Item
            key={note.id}
            note={note}
            handleDeleteNote={handleDeleteNote}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ note, handleDeleteNote, toggleDone }) {
  return (
    <li className="bg-slate-700 text-white p-3 my-4 rounded-md flex justify-between">
      <div>
        <input
          className="custom-checkbox"
          type="checkbox"
          onChange={() => toggleDone(note.id)}
        />
        <span className={note.done ? "line-through m-2" : "m-2"}>
          {note.text}
        </span>
      </div>
      <button
        className="bg-red-500 rounded-md px-2 py-1"
        onClick={() => handleDeleteNote(note.id)}
      >
        delete
      </button>
    </li>
  );
}

function Stats({ notes }) {
  const totalNotes = notes.length;
  const completedNotes = notes.filter((note) => note.done).length;
  const completionRate = totalNotes
    ? Math.round((completedNotes / totalNotes) * 100)
    : 0;

  return (
    <footer className="bg-slate-700 text-slate-300 text-base text-center font-semibold w-full p-3">
      <span>
        kamu punya {totalNotes} catatan dan baru {completedNotes} yang di
        checklist ({completionRate.toFixed(2)}%){" "}
      </span>
    </footer>
  );
}

export default App;
