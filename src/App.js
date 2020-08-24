import React, {useState} from 'react';
import './App.css';

import * as Wysiwyg from './wysiwyg';

function App() {
  const [componentDefinitions, setComponents] = useState([]);

  const setComponent = (i) => {
    return (newVal) => setComponents([
      ...componentDefinitions.slice(0, i),
      newVal,
      ...componentDefinitions.slice(i+1),
    ]);
  };

  return (
    <div className="App">
      <div className="col-left">
        {componentDefinitions.map((def, i) => {
          return <Wysiwyg.ComponentBuilder key={i} onChange={setComponent(i)}/>
        })}
        <button type="button" onClick={() => setComponents([...componentDefinitions, {}])}>Add another</button>
      </div>

      <div className="col-right">
        <p>{JSON.stringify(componentDefinitions)}</p>
        <div className="app--preview">
          {componentDefinitions.map((def, i) => {
            return <Wysiwyg.ComponentRenderer key={i} definition={def}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
