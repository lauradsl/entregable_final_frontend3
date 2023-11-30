import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => 
{
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [listaDentistas, setListaDentistas] = useState([]);
  const [dentistas, setDentistas] = useState([]);
  const params = useParams();
  const [tema, setTema] = useState("light");



  //CAMBIO DE TEMA
  const cambioTema = () => 
  {
    const nuevaTema = tema === "light" ? "dark" : "light"
    setTema(nuevaTema)
    localStorage.setItem("tema", nuevaTema)
  }

  useEffect(() => 
  {
    const temaAlmacenado = localStorage.getItem("tema");
    if (temaAlmacenado) 
    {
      setTema(temaAlmacenado);
    }
  }, []);
  
  
  //HOME
  useEffect(()=>
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => 
      {
        setListaDentistas(res.data)
      })
  }, [])


  //DETAIL_IP
  useEffect(() => 
{
  
    console.log("ID del parámetro:", params.id);
    if (params.id)
    {
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => 
      {
        setDentistas(res.data)
      })
    
   .catch ((error) => 
   {
    console.log("No se ha encontrado el dentista", error)
   })
  }
},[params.id])

const memoContext = useMemo(
  () => 
  ({
    listaDentistas,
    dentistas,
    tema,
    cambioTema,
  }),
  [listaDentistas, dentistas, tema, cambioTema]
);


  return (
    <ContextGlobal.Provider value={memoContext}>
      {children}
    </ContextGlobal.Provider>
  );
};


