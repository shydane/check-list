import { useState } from "react";

// const listItems = [
//   { id: 1, title: "Eat", done: false },
//   { id: 2, title: "Sleep", done: true },
// ];

function App() {
  return (
    <div className="h-lvh">
      <Logo />
      <Form />
      {/* <Checklist /> */}
      <Stats />
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
    { id: 1, text: "Hello", done: true },
    { id: 2, text: "World", done: false },
    { id: 3, text: "mamam", done: false },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.title.value);
  }

  return (
    <>
      <form
        className="bg-slate-600 text-slate-300 text-base text-center font-semibold p-3"
        onSubmit={handleSubmit}
      >
        <h2>ada yang mau dicatat?</h2>
        <input
          className="m-4 rounded-xl text-black px-3 py-1"
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-green-400 rounded-lg px-3 py-1 text-white">
          ADD
        </button>
      </form>
      <Checklist notes={notes} setNotes={setNotes} />
    </>
  );
}

function Checklist({ notes, setNotes }) {
  return (
    <div>
      <ul className="font-semibold p-5">
        {notes.map((note) => (
          <Item key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}

function Item({ note }) {
  return (
    <li className="bg-slate-700 text-slate-300 text-white p-3 my-4 rounded-md flex justify-between">
      <div>
        <input type="checkbox" />
        <span className={note.done ? "line-through m-2" : "m-2"}>
          {note.text}
        </span>
      </div>
      <button className="bg-red-500 rounded-md px-2 py-1">delete</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="bg-slate-700 text-slate-300 text-base text-center font-semibold w-full p-3 absolute bottom-0">
      <span>kamu punya x catatan dan baru x yang di checklist (x%) </span>
    </footer>
  );
}

export default App;
