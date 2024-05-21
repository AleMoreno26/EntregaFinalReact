import './CartWidget.css';



export default function CartWidget() {
  return (
    <>
      <div>
        <button>Ingresar</button>
        <button><i className="bi-card bi-cart3"></i><span>0</span></button>

      </div>
    </>
  );
}