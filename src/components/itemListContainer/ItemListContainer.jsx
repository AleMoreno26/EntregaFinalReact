import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Item from '../item/Item';
import ReactLoading from 'react-loading';

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const [isLoading, setIsLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            setIsLoading(true);

            try {
                const productosRef = collection(db, "productos");
                const q = categoria
                    ? query(productosRef, where("categoria", "==", categoria))
                    : productosRef;

                const resp = await getDocs(q);
                const productosList = resp.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosList);

                if (categoria) {
                    setTitulo(`Productos de ${categoria}`);
                } else {
                    setTitulo("Productos");
                }
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductos();
    }, [categoria]);

    return (
        <>
            <div className='container'>
                <h1>{titulo}</h1>
                {isLoading ? (
                    <div className="loading-container">
                        <ReactLoading type="spokes" color="gold" height={50} width={50} />
                    </div>
                ) : (
                    <div className='list'>
                        {productos.map(producto => <Item key={producto.id} producto={producto} />)}
                    </div>
                )}
            </div>
        </>
    );
}
