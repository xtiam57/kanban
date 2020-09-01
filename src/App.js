import React from 'react';
import logo from 'assets/images/logo.svg';
import './App.css';
import Board from 'components/Board';
import Card from 'components/Card';
import theme from 'utils/theme';

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
      </header>

      <div className="main-container">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <h4>Card 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi, autem officia fuga neque explicabo
              saepe totam minima nesciunt voluptatum error soluta reprehenderit. Corrupti magnam laboriosam reiciendis
              praesentium unde quia.
            </p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <h4>Card 3</h4>
            <p>
              Loremtur, adipisicing elit. Dicta sequi, autem officia fuga neque{' '}
              <strong>explicabo saepe totam minima</strong> nesciunt.
            </p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <h4>Card 2</h4>
            <p>
              Lorem ipsum dolor sit amet <code>consectetur, adipisicing elit.</code> Dicta sequi, autem officia fuga
              neque explicabo
            </p>
          </Card>
        </Board>

        <Board id="board-3" className="board"></Board>
      </div>
    </div>
  );
}

export default App;
