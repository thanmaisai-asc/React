import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from '../src/components/Nomatch'
import Products from './components/Products';
import FeaturedProducts from '../src/components/FearturedProducts';
import NewProducts from '../src/components/NewProducts';
import UserDetails from './components/Userdetails';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />}>
        <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
