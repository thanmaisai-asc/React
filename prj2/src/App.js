import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* add two more pages */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>
    </div>
  );
}

export default App;