import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';

export default function ItemDetail({ detalle }) {

  
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
        <ItemCount item={detalle}/>
        <p className='precio'>${detalle.precio}</p>
      </div>
      <button className="btn btn-primary btn-agregar">Agregar al carrito</button>
      <Link to={"/"} className="bi bi-arrow-left-circle"></Link>
    </div>
  </div>
);
}