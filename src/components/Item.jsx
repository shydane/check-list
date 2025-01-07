function Item({ note, onDeleteItem, onToggleDone }) {
  return (
    <li className="bg-slate-700 text-white p-3 my-4 rounded-md flex justify-between">
      <div>
        <input
          className="custom-checkbox"
          type="checkbox"
          value={note.done}
          onChange={() => onToggleDone(note.id)}
        />
        <span className={note.done ? "line-through m-2" : "m-2"}>
          {note.title}
        </span>
      </div>
      <button
        className="bg-red-500 rounded-md px-2 py-1"
        onClick={() => onDeleteItem(note.id)}
      >
        delete
      </button>
    </li>
  );
}

export default Item;
