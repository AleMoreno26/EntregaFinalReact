import './ItemCart.css';

export default function ItemCart({ prod, onRemove }) {
    return (
        <div className="carrito-item">
            <img className="imagen" src={prod.imagen} alt={prod.titulo} />
            <div className="contenido">
                <h2 className="titulo">{prod.titulo}</h2>
                <div className="detalles">
                    <p className="cantidad">Cant: {prod.cantidad}</p>
                    <p className="precio">Precio Unit: ${prod.precio}</p>
                    <p className="precio-total">Precio Total: ${prod.precio * prod.cantidad}</p>
                </div>
                <button className="eliminar" onClick={() => onRemove(prod.id)}>Eliminar</button>
            </div>
        </div>
    );
}