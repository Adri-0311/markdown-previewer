import { useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Previewer from './components/Previewer.jsx';
import TextBase from './assets/text.json';

function App() {
  const [markInput, setMarkInput] = useState(TextBase.markdown.join('\n\n'));

  console.log(TextBase.markdown);

  return (
    <div className="App h-screen grid items-center">
      <div className="grid sm:grid-rows-2 lg:grid-cols-2 gap-4">
        <Editor markImput={markInput} setMarkInput={setMarkInput} />
        <Previewer markImput={markInput} />
      </div>
    </div>
  );
}

export default App;
