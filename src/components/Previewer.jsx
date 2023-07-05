import Markdown from 'marked-react';
import { useSelector } from 'react-redux';

export default function Previewer() {
  const markdownState = useSelector((state) => state.markdownInput.input);

  return (
    <div className='previewer-wrapper col-start-2 col-span-10 lg:col-start-7 lg:col-end-12 min-h-full'>
      <div className='header p-2 text-slate-50 text-center bg-emerald-700 border border-b-0 border-slate-500 rounded-t'>
        Previewer <i className='fas fa-eye'></i>
      </div>
      <div
        id='preview'
        className='w-full max-h-[80%] p-4 bg-emerald-50 border border-t-0 border-slate-500 rounded-b overflow-y-scroll'
      >
        <Markdown gfm={true} breaks={true}>
          {markdownState}
        </Markdown>
      </div>
    </div>
  );
}
