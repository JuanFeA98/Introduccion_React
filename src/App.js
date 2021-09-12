import React from 'react';
import {ToDoProvider } from './context/index.js'
import {AppUI} from './AppUI.js'

import './styles/index.css';


function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
