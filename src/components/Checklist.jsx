import { useState } from "react";
import Item from "./Item";

function Checklist({ notes, onDeleteItem, onToggleDone, onDeleteItems }) {
  const [sortBy, setSortBy] = useState("input");

  function sortNotes() {
    switch (sortBy) {
      case "judul":
        return notes.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return notes.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return notes;
    }
  }

  const sortedNotes = sortNotes();

  return (
    <div>
      <div className="flex justify-evenly text-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mt-5 rounded-lg px-3 py-1 bg-slate-900 border-2 border-slate-300"
        >
          <option value="input">urutkan berdasarkan input</option>
          <option value="judul">urutkan berdasarkan judul</option>
          <option value="status">urutkan berdasarkan status</option>
        </select>
        <button
          className="rounded-lg mt-5 py-1 px-3 bg-slate-900 border-2 border-slate-300"
          onClick={onDeleteItems}
        >
          Hapus
        </button>
      </div>
      <ul className="font-semibold p-5">
        {sortedNotes.map((note) => (
          <Item
            key={note.id}
            note={note}
            onDeleteItem={onDeleteItem}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
