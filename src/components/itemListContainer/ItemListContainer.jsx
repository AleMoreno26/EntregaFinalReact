import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import Item from '../item/Item';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {

    const [producto, setProducto] = useState([]);

    const [titulo, setTitulo] = useState ("Productos");

    const {categoria} = useParams();

    useEffect(() => {
       
        pedirDatos()
            .then((data) => {
                
                if (categoria) {
                    setProducto(data.filter((prod) => prod.categoria === categoria));
                    setTitulo (categoria);
                } else {
                    setProducto(data);
                    setTitulo ("Productos");
                }
            })
    }, [categoria]);

    return (
        <>
            <div className='container'>
                <h1>{titulo}</h1>
                <div className='list'>
                    {producto.map(producto => <Item key={producto.id} producto={producto} />)}
                </div>
            </div>

        </>
    )
}