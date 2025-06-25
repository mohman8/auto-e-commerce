
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import CartItems from './Components/CartItems/CartItems.jsx'
export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/contact' element={<contact/>}/> */}
          <Route path='/shop' element={<ShopCategory/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          {/* <Route path=':productId' element={<Product/>}/> */}
          <Route path='/cart' element={<CartItems/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

