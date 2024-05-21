import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  
  return (
    <div key={producto.id} className='producto-detalle'>
      <img className='imagen' src={producto.imagen} alt={producto.titulo} />
      <div className="contenido">
        <div>
          <h3 className='titulo'>{producto.titulo}</h3>
          <p className='categoria'>{producto.categoria}</p>
        </div>
        <div className="detalle-footer">
          <p className='precio'>${producto.precio}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-link btn-ver-mas">Ver más</Link>
        </div>
      </div> 
    </div>
  );
}
