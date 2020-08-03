import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import CounterGroup from './components/CouterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
      </header>
    </div>
  );
}

export default App;
