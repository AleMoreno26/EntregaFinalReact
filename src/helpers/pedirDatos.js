import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
} 



export const buscarProducto = (id) => {

    return new Promise((resolve, reject) => {
        
        const producto = data.find((prod) => prod.id == id);
        
if (producto) {
    resolve(producto);
} else {
    reject ({
        error: "no se encontro producto"
    })
}
    });
};