import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {tema, cambioTema} = useContext(ContextGlobal)
 
  return (
    <nav className = {`App ${tema}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

        <h3>DH ODONTO</h3>

        <div>
        <Link to='/home'>Home</Link>
        <Link to='/contacto'>Contacto</Link>
        <Link to='favs'>Favoritos</Link>

        <button onClick={cambioTema}>Change theme</button>
        </div>
        
    </nav>
  )
}

export default Navbar