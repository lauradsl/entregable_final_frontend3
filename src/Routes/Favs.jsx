import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => 
{

  const [favs,setFavs] = useState([])
  const {tema} = useContext(ContextGlobal)

  const getFavorito = JSON.parse(localStorage.getItem("favoritos"))
 
  useEffect(() => 
  {
    
      setFavs(getFavorito);
      console.log("Lista favoritos", getFavorito)
    
  }, []);




  return (
    <>
      <h1>Dentistas favoritos</h1>

      <div className= {` card-grid App ${tema}`} >
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((dentista) =>(
          <Card  
            key = {dentista.id}
            name = {dentista.name}
            username = {dentista.username} />
        ))}
         
      </div>
    </>
  );
};

export default Favs;


/*

  useEffect(() =>
  {
    const renderizarFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    return(() =>{
      setFavs(renderizarFavoritos)
    })
    
    
    
  }, [])
  

*/