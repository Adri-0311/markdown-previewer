import Markdown from 'marked-react';

export default function Previewer({ markImput }) {
  return (
    <div className="previewer-wrapper max-h-[80%] max-w-[80%] mx-auto">
      <div className="header p-2 text-slate-50 text-center bg-emerald-800 border border-b-0 border-slate-500 rounded-t">
        Previewer <i class="fas fa-eye"></i>
      </div>
      <div
        id="preview"
        className="w-full p-4 bg-emerald-50 border border-t-0 border-slate-300 rounded-b"
      >
        <Markdown gfm={true} breaks={true}>
          {markImput}
        </Markdown>
      </div>
    </div>
  );
}
