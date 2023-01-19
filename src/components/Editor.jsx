export default function Editor({ markImput, setMarkInput }) {
  const manejarCambio = (e) => {
    setMarkInput(e.target.value);
  };

  return (
    <div className="editor-wrapper max-h-[80%] w-[80%] mx-auto">
      <div className="header p-2 text-slate-50 text-center bg-emerald-800 border border-b-0 border-slate-500 rounded-t">
        Editor <i class="fas fa-edit"></i>
      </div>
      <textarea
        className="w-full min-h-full p-4 bg-emerald-50 border border-t-0 border-slate-300 rounded-b"
        type="text"
        id="editor"
        onChange={manejarCambio}
      >
        {markImput}
      </textarea>
    </div>
  );
}
