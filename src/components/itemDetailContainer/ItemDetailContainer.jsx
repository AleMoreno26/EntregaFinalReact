import { buscarProducto } from '../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {

    const { id } = useParams();

    const [detalle, setDetalle] = useState({});

    useEffect(() => {
        buscarProducto(id)
            .then((res) => {
                setDetalle(res);
            })
            .catch((error) => {
                console.error("Error al buscar el producto:", error);
                setDetalle(null);
            });
    }, [id]);

    return (
        <>
            <div className='container'>
                <h1>Detalle Producto</h1>
                <div className='container-Detail'>
                    {detalle && <ItemDetail detalle={detalle} />}
                </div>
            </div>
        </>

    );
}