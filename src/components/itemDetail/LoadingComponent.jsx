import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function LoadingComponent({ loading }) {
    const [isLoading, setIsLoading] = useState(loading);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <ReactLoading type="spokes" color="gold" height={50} width={50} />
                </div>
            ) : null}
        </>
    );
}
