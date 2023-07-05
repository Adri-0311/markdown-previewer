import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from '../app/markdown/markdownSlice';

export default function Editor() {
  const dispatch = useDispatch();
  const markdownState = useSelector((state) => state.markdownInput.input);
  
  const manejarCambio = (e) => {
    dispatch(updateMarkdown(e.target.value));
  };

  return (
    <div className='editor-wrapper col-start-2 col-span-10 lg:col-start-2 lg:col-end-7 min-h-full'>
      <div className='header p-2 text-slate-50 text-center bg-emerald-800 dark:bg-emerald-700 border border-b-0 border-slate-500 rounded-t'>
        Editor <i className='fas fa-edit'></i>
      </div>
      <textarea
        className='w-full min-h-[80%] p-4 bg-emerald-50 border border-t-0 border-slate-500 rounded-b'
        type='text'
        id='editor'
        onChange={manejarCambio}
        value={markdownState}
      ></textarea>
    </div>
  );
}
