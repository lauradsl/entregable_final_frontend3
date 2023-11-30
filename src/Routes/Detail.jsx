import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {dentistas, tema} = useContext(ContextGlobal)
  

  return (
    <>
    <h1>Detalles del dentista: {dentistas.id} </h1>
    <div className= {`table App ${tema}`}>
    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: {dentistas.name} </p>
      <p>Email: {dentistas.email} </p>
      <p>Phone: {dentistas.phone} </p>
      <p>Website: {dentistas.website} </p>

      </div>

    </>
  )
}

export default Detail

