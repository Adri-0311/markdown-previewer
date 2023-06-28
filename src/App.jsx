import { useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Previewer from './components/Previewer.jsx';
import TextBase from './assets/text.json';

function App() {
  const [markInput, setMarkInput] = useState(TextBase.markdown.join('\n\n'));

  return (
    <div className='App h-screen my-4'>
      <div className='max-h-full grid grid-cols-12 auto-rows-[minmax(50%,_1fr)] grid-flow-row gap-4'>
        <Editor markImput={markInput} setMarkInput={setMarkInput} />
        <Previewer markImput={markInput} />
      </div>
      <p className='text-center mb-2 mt-5 lg:mt-0'>
        Original app:&nbsp;
        <a
          href='https://markdown-previewer.freecodecamp.rocks/'
          target='_balank'
          className='hover:text-indigo-700 dark:hover:text-indigo-300'
          aria-label='Original app'
        >
          FCC : Markdown Previewer
        </a>
      </p>
      <p className='text-center mb-2'>
        <a
          href='https://github.com/Adri-0311/markdown-previewer'
          className='hover:text-indigo-700 dark:hover:text-indigo-300'
          target='_balank'
          aria-label='Github repository'
        >
          <i className='fa-brands fa-github'></i>
        </a>
      </p>
    </div>
  );
}

export default App;
