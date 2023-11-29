import React from "react";
import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id, dentista }) => 
{
  function cardReducer(state,action)
  {
    switch(action.type)
    {
      case 'mostrarFavoritos':
      return action.payload

      case 'agregarFavorito':
      const agregarFavorito = [...state, action.payload];
      localStorage.setItem('favoritos', JSON.stringify(agregarFavorito));
      return agregarFavorito;

      default:
      return state;
    }
  }

  //Establecemos useReducer
  const [favoritos, dispatchFavoritos] = useReducer(cardReducer, [])

 
  const addFav = ()=>
  {
    // Aqui iria la logica para agregar la Card en el localStorage
  
      const validacionFavorito = favoritos.find(favorito => favorito.id === id);

      if(!validacionFavorito)
      {
      dispatchFavoritos({ type: 'agregarFavorito', payload: { name, username, id } })
      console.log("Dentista guardado:", "NOMBRE:", name, "/", "USERNAME:",username, "/", "ID:",id)
      alert("Dentista agregado exitosamente a la lista de favoritos")
      } else
      {
        alert("El dentista seleccionado ya existe en la lista de favoritos")
      }
  }

  const mostrarFavoritos = () => 
  {
    const guardarFavorito = JSON.parse(localStorage.getItem("favoritos"))
    //console.log("Favoritos mostrados:", guardarFavorito);
    return (() =>
    {
      dispatchFavoritos({ type: 'mostrarFavoritos', payload: guardarFavorito });
    })
  };

  useEffect(() =>
  {
    return (mostrarFavoritos())
  },[])
  


  return (

    <>
    <div className="card">
      <img src="../public/images/doctor.jpg" alt="Doctor" className="imagen"/>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${id}`}>
        <p><b>Nombre: </b>{name} </p>
        </Link>
        <p><b>Username: </b>{username} </p>

      
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={addFav} className="favButton">Add fav</button>
        <Link to={`/dentist/${id}`}></Link>

        
    </div>
    </>
    
  );
};

export default Card;


/*

// Se usa useEffect para actualizar localStorage cuando la lista de favoritos cambie
useEffect(() => 
   {
     const guardarFavorito = JSON.parse(localStorage.getItem("favoritos"))
     if(guardarFavorito)
     {
      dispatchFavoritos({type: 'mostrarFavoritos', payload: guardarFavorito})
      console.log("se ha guardado: ", name, username, id)
     }
     
   }, []);
   
   
    const mostrarFavoritos = () => 
  {
    const guardarFavorito = JSON.parse(localStorage.getItem("favoritos")) || [];
    dispatchFavoritos({ type: 'mostrarFavoritos', payload: guardarFavorito });
    console.log("Favoritos mostrados:", guardarFavorito);
  };
   

//ESTE TIENE MENOS RENDERIZADOS
useEffect(() =>
{
  
  const guardarFavorito = JSON.parse(localStorage.getItem('favoritos')) || []
  return(() =>{
    dispatchFavoritos({ type: 'mostrarFavoritos', payload: guardarFavorito })
    console.log("Favoritos guardados",favoritos)
  })

},[])


<Favs renderizarFavorito = {mostrarFavoritos}/>
   */