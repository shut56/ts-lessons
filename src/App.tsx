import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentTime, user } from './consts';
import { DateViewer } from './components/date-viewer';
import { Card } from './components/card/Card';

function App() {
  const count = user.name + 10;
  const [time, setTime] = useState(getCurrentTime());

  const clickHandler = () => {
    setTime(getCurrentTime());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{count}</div>
        <DateViewer description="Current date">Pepe the Frog</DateViewer>
        <Card />
        <Card>Current time: {time}</Card>
        <button type="button" onClick={clickHandler}>
          Get current time
        </button>
      </header>
    </div>
  );
}

export default App;
