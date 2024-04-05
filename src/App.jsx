import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toolbar from './state-class/Toolbar';
import ProjectList from './state-class/ProjectList';
import Portfolio from './state-class/Portfolio';

function App() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;