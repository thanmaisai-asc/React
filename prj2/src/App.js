import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from '../src/components/Nomatch'
import Products from './components/Products';
import { AuthProvider } from "../src/components/utils/auth";
import FeaturedProducts from '../src/components/FearturedProducts';
import NewProducts from '../src/components/NewProducts';
import UserDetails from './components/Userdetails';
import Users from './components/Users';
import Profile from './components/Profile';
import Login from './components/Login';
import React from 'react';
import { RequireAuth } from './components/utils/RequireAuth';


const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* add two more pages */}

          <Route path="/" element={<Home />}></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="/about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}></Route>
          </Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
