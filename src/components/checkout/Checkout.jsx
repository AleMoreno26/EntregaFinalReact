import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './checkout.css';

export default function Checkout() {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <>
                <div className="container-formulario">
                    <h1 className="main-title-formulario">Muchas gracias por tu compra</h1>
                    <p>Tu numero de pedido es:{pedidoId}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container-formulario">
                <h1 className="main-title-formulario">Checkout</h1>
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <input className="input-field" type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                    <input className="input-field" type="email" placeholder="Ingrese su e-mail" {...register("email")} />
                    <input className="input-field" type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />
                    <button className="enviar" type="submit">Finalizar Compra</button>
                </form>
            </div>
        </>
    );
}