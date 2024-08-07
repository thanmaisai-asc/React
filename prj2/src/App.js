import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Nomatch from './components/Nomatch';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* add two more pages */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/order-summary' element={<OrderSummary />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;