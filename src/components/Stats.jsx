function Stats({ notes }) {
    if (notes.length === 0) {
      return (
        <footer className="bg-slate-700 text-slate-300 text-lg text-center font-semibold w-full p-3">
          <span>📝 yuk mulai bikin catatan</span>
        </footer>
      );
    }
  
    const totalNotes = notes.length;
    const completedNotes = notes.filter((note) => note.done).length;
    const completionRate = totalNotes ? (completedNotes / totalNotes) * 100 : 0;
  
    return (
      <footer className="bg-slate-700 text-slate-300 text-lg text-center font-semibold w-full p-3">
        <span>
          {completionRate === 100
            ? "✅ kamu sudah melakukan semua catatan!"
            : `kamu punya ${totalNotes} catatan dan ${completedNotes} note yang sudah di
            checklist (${completionRate.toFixed(2)}%)`}
        </span>
      </footer>
    );
  }

  export default Stats;