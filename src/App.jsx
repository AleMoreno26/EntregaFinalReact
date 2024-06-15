import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCart from './components/cart/ItemCart';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/cart/CartContainer';
import Checkout from './components/checkout/Checkout';
import Contacto from './components/formularios/Contacto';





function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/productos/:categoria" element={<ItemListContainer />} />
            <Route exact path="/Itemcart" element={<ItemCart />} />
            <Route exact path="/carrito" element={<CartContainer />} />
            <Route exact path="/checkout" element={<Checkout/>} />
            <Route exact path="/contacto" element={<Contacto/>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}


export default App;
