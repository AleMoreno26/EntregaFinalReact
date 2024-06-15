import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



export default function CartWidget() {

  const { numeroCarrito } = useContext(CartContext);

  return (
    <>
      <div className="navbar">
        <Link className="navbar-button cart-link" to="/Contacto">Ingresar</Link>
        <Link className="button bi-card bi-cart3 cart-link" to="/carrito">
          <span>{numeroCarrito()}</span>
        </Link>

      </div>
    </>
  );
}