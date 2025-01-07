import React, { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newNote = {
      id: Date.now(),
      title,
      done: false,
    };
    onAddItem(newNote);
    setTitle("");
    // if (title.trim() !== "") {
    //   const newNote = {
    //     id: new Date().getTime(),
    //     text: title,
    //   };
    //   setNotes([...notes, newNote]);
    //   setTitle("");
    // }
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  return (
    <>
      <form
        className="bg-slate-600 text-slate-300 text-base text-center font-semibold p-3"
        onSubmit={handleSubmit}
      >
        <h2>Ada hal yang mau ditambahkan?</h2>
        <input
          className="m-4 rounded-xl text-slate-300 px-3 py-1 bg-slate-900"
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
    </>
  );
}

export default Form;
