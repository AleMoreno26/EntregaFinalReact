import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(false);

const carritoEnCero = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoEnCero);

    const agregarAlCarrito = (detalle, cantidad) => {
        const itemAgregado = { ...detalle, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const removeItem = (itemId) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== itemId);
        setCarrito(nuevoCarrito);
    }

    const numeroCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removeItem,
            numeroCarrito,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    );
}
