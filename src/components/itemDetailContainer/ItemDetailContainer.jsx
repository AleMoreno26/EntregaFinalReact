import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import LoadingComponent from '../itemDetail/LoadingComponent';


export default function ItemDetailContainer() {
    const { id } = useParams();
    const [detalle, setDetalle] = useState({});
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setDetalle({ ...resp.data(), id: resp.id });
            })
            .catch((error) => {
                console.error("Error fetching product document: ", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [id]);

    return (
        <>
            <div className='container'>
                <h1>Detalle Producto</h1>
                <div className='container-Detail'>
                    <LoadingComponent loading={loading} /> {}
                    {detalle && !loading && <ItemDetail detalle={detalle} />}
                </div>
            </div>
        </>
    );
}
