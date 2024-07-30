import React from 'react';
import './App.css';
import Greet from './components/greet';
import Message from './components/message'
import Counter from './components/counter'
import Usergreet from './components/usergreet';

function App() {
  return (
    <div className="App">
      <Counter/>
     <Greet name="Thanmai Sai" age="21">
        <p>This is a child element.</p>
        <p>You can pass any elements here.</p>
        <button>test</button>
      </Greet>
      <Message/>
      <Usergreet/>
    </div>
  );
}

export default App;
