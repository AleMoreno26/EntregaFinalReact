export default function ItemCount({ cantidad, handleRestar, handleSumar }) {



  return (

    <div className="cantidad">
      <button className="btn btn-sm btn-secondary" onClick={handleSumar}>+</button>
      <span>{cantidad}</span>
      <button className="btn btn-sm btn-secondary" onClick={handleRestar}>-</button>
    </div>
  );
}