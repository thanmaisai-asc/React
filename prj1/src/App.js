import React from 'react';
import './App.css';
import Greet from './components/greet';
import Message from './components/message'

function App() {
  return (
    <div className="App">
     <Greet name="Thanmai" age="21">
        <p>This is a child element.</p>
        <p>You can pass any elements here.</p>
        <button>test</button>
      </Greet>
      <Message/>
    </div>
  );
}

export default App;
