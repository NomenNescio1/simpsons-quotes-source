import React from 'react';
import './App.css';
import {useFetchQuote} from './components/QuoteHooks';

function App() {
  return (
    <div className="app">
      <h2>The Simpsons Quote Generator v2</h2>
      <h4>(Mostly Homer)</h4>
      {useFetchQuote()}
    </div> 
  );
}

export default App;
