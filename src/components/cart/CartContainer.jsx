import './CartContainer.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from 'react-router-dom';

export default function CartContainer() {
    const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <>
            <div className="container">
                <h1 className="main-title">Carrito</h1>
                <div className="List">
                    {carrito.map(prod => (
                        <ItemCart key={prod.id} prod={prod} onRemove={handleRemoveItem} />
                    ))}
                </div>
                {
                    carrito.length > 0 ? (
                        <>
                            <h2>Precio Total: ${precioTotal()}</h2>
                            <div>
                                <button className="cart-button" onClick={handleVaciar}>Vaciar</button>
                                <Link to="/checkout" className="cart-button">Comprar</Link>
                            </div>
                        </>
                    ) : <h3>El carrito esta vacio</h3>
                }
            </div>
        </>
    );
} 