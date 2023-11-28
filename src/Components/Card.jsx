import React from "react";
import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => 
{
  function cardReducer(state,action)
  {
    switch(action.type)
    {
      case "mostrarFavoritos":
      return action.payload

      case "agregarFavorito":
      const agregarFavorito = [...state, action.payload];
      localStorage.setItem("favoritos", JSON.stringify(agregarFavorito));
      return {agregarFavorito};

      default:
      return state;
    }
  }

  //Establecemos useReducer
  const [favoritos, dispatchFavoritos] = useReducer(cardReducer, [])

  const addFav = ()=>
  {
    // Aqui iria la logica para agregar la Card en el localStorage
    
  }

  return (
    <div className="card">
      <img src="../public/images/doctor.jpg" alt="Doctor" className="imagen"/>
        {/* En cada card deberan mostrar en name - username y el id */}
        <p><b>ID: </b>{id} </p>
        <p><b>Nombre: </b>{name} </p>
        <p><b>Username: </b>{username} </p>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${id}`}>
        <button onClick={addFav} className="favButton">Add fav</button>
  </Link>
    </div>
  );
};

export default Card;
