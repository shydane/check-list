import { useState } from "react";

const listItems = [
  { id: 1, title: "Eat", done: false },
  { id: 2, title: "Sleep", done: true },
];

function App() {
  return (
    <div className="h-lvh">
      <Logo />
      <Form />
      <Checklist />
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.title.value);
  }

  return (
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
  );
}

function Checklist() {
  return (
    <div>
      <ul className="font-semibold p-5">
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {/* <ul>{title}</ul> */}
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span className={item.done ? "line-through m-2" : "m-2"}>
        {item.title}
      </span>
      <button>❌</button>
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
