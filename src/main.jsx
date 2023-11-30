import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Detail from './Routes/Detail.jsx'
import Contact from './Routes/Contact.jsx'
import Favs from './Routes/Favs.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path = '/' element = {<App/>}>

          
          <Route path = 'home' element = {<Home/>}/>
          <Route path = 'dentist/:id' element = {<Detail/>}/>
          <Route path = 'contacto' element = {<Contact/>}/>
          <Route path = 'favs' element = {<Favs/>}/>

        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  
)
