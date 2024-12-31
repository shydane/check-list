import { useState } from "react";

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
  return (
    <div className="bg-slate-600 text-slate-300 text-base text-center font-semibold p-3">
      <h2>ada yang mau dicatat?</h2>
    </div>
  );
}

function Checklist() {
  return (
    <div>
      <ul className="flex justify-around font-semibold p-5">
        <li>Makan</li>
        <li>Tidur</li>
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="bg-slate-700 text-slate-300 text-base text-center font-semibold p-3 absolute bottom-0">
      <span>kamu punya x catatan dan baru x yang di checklist (x%) </span>
    </footer>
  );
}

export default App;
