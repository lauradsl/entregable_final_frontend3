import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'
import { useContext } from 'react'  
import React from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => 
{

  const {listaDentistas, tema} = useContext(ContextGlobal)
  
 
  return (
    <main className = {`App ${tema}`} >
      <h1>Home</h1>
      <div className='card-grid'>

        {listaDentistas.map((dentista) =>(
          <Card  
            key = {dentista.id}
            id = {dentista.id}
            name = {dentista.name}
            username = {dentista.username}
            dentista = {dentista}
          />
        ))}
      

      </div>
    </main>
  )
}

export default React.memo(Home)