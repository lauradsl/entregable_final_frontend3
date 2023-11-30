import React from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'


const Footer = () => 
{

  const {tema} = useContext(ContextGlobal)

  return (
    <>

<div className='divFooter'></div>
    
    <footer className = {`App ${tema}`}>

    
      <img src="/images/DH.png" alt='DH-logo' />
    

      <div className='divRedes'>
      <img src="/public/images/ico-facebook.png" alt="facebook" className='imagenFooter' /> 
      <img src="/public/images/ico-instagram.png" alt="facebook" className='imagenFooter' />
      <img src="/public/images/ico-whatsapp.png" alt="facebook" className='imagenFooter' />
      <img src="/public/images/ico-tiktok.png" alt="facebook" className='imagenFooter' />
      </div>
    </footer>

    </>
  )

  
}

export default Footer
