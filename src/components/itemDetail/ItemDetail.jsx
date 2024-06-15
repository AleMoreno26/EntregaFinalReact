import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({ detalle }) {

  const { carrito, agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    cantidad < detalle.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className='producto-detalle'>
      <img className='imagen' src={detalle.imagen} alt={detalle.titulo} />
      <div className="contenido">
        <div>
          <h3 className='titulo'>{detalle.titulo}</h3>
          <p className='descripcion'>{detalle.descripcion}</p>
          <p className='categoria'>Categoria:{detalle.categoria}</p>
        </div>
        <div className="detalle-footer">
          <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} />
          <p className='precio'>${detalle.precio}</p>
        </div>
        <button className="btn btn-primary btn-agregar" to="/cart" onClick={() => { agregarAlCarrito(detalle, cantidad) }}>Agregar al carrito</button>
        <Link to={"/"} className="bi bi-arrow-left-circle"></Link>
      </div>
    </div>
  );
}