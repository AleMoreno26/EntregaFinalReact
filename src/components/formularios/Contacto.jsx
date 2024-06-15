import { useForm } from "react-hook-form";
import './contacto.css';

export default function Contacto() {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="container-formulario">
                <h1 className="main-title-formulario">Contacto</h1>
                <form className="formulario" onSubmit={handleSubmit(enviar)}>
                    <input className="input-field" type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                    <input className="input-field" type="email" placeholder="Ingrese su e-mail" {...register("email")} />
                    <input className="input-field" type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />
                    <button className="enviar" type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}