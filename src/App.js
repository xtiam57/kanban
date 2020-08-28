import React from 'react';
import logo from 'assets/images/logo.svg';
import './App.css';
import { rgba } from 'utils/rgba';
import { defaultColors } from 'utils/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {rgba('#999', 0.5)}
      </header>
    </div>
  );
}

export default App;
