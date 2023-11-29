import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'  
import { useSearchParams } from "react-router-dom";
import { render } from "react-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => 
{

  const [favs, setFavs] = useState([])

  useEffect(() =>
  {
    const renderizarFavoritos = JSON.parse(localStorage.getItem("favoritos"));
    setFavs(renderizarFavoritos)
    console.log(renderizarFavoritos)
    
  }, [])
  

  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((dentista) =>(
          <Card  
            key = {dentista.id}
            name = {dentista.name}
            username = {dentista.username}

          />
        ))}
      </div>
    </>
  );
};

export default Favs;
