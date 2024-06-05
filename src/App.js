//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Cart } from './Cart';
import { ShopContextProvider } from './CartContext';
// import { Cart } from './Pages/Cart';
import { Login } from './Login';
import { Signup } from './Signup';


function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      
    </Router>
    </ShopContextProvider>
    
  );
}

export default App