import { useState } from "react";

export default function ItemCount ({item}) {

const [cantidad, setCantidad] = useState (1)

const handleRestar = () => {
    cantidad > 1 && setCantidad (cantidad-1)
}
const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad+1)
}

    return (

    <div className="cantidad">
    <button className="btn btn-sm btn-secondary" onClick={handleSumar}>+</button>
    <span>{cantidad}</span>
    <button className="btn btn-sm btn-secondary" onClick={handleRestar}>-</button>
  </div>
);
}