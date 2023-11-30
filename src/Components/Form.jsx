import React from "react";
import { useState } from "react";


const Form = () => 
{
  //Aqui deberan implementar el form completo con sus validaciones


    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("");
    

    const handleSubmit = e =>
    {
        e.preventDefault()

        const validacionCorreo = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

        if(nombre === '' || !/^[A-Za-z\s]+$/.test(nombre) || nombre.length < 5)
        {
          setMensaje("Campo nombre incorrecto. Debe contener un nombre de más de cinco letras. Solo letras son validas")
        } else if (!validacionCorreo.test(email))
        {
          setMensaje("El email no cumple con las condiciones")
        } else{
            setMensaje("Gracias " + nombre + " te contactaremos cuanto antes vía mail")
        }
          
    }


  return (
    <>

    <h2>Regístrese para votar</h2>
    <form
      onSubmit={handleSubmit}
    
    >

        <label htmlFor="nombre"> Nombre: </label>
        <input
          type = 'text'
          id='nombre'
          placeholder='Ingrese el nombre de su mascota'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <label htmlFor="email"> Email: </label>
        <input
          type = 'text'
          id='email'
          placeholder='Ingrese su email '
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button 
            type="submit"
            value="Enviar datos"
            className='boton'
        >Enviar
        </button>
        </form>

        {mensaje && <div>{mensaje}</div>}

      </>
        
  )
};

export default Form;
