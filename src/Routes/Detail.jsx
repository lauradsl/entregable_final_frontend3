import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {dentista} = useContext(ContextGlobal)

  
    try
    {
      if(!dentista)
      {
        console.log(dentista)
      }
    } catch (error)
      {
        console.log("No se ha encontrado el dentista")
      }
  

  //INFO DENTISTAS
  

  return (
    <>
      <h1>Detail Dentist id </h1>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: </p>
      <p>Email: </p>
      <p>Phone: </p>
      <p>Website: </p>

    </>
  )
}

export default Detail

/*<Link to={`/dentist/${id}`}>
        Ver detalles
      </Link>*/