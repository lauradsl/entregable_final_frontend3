import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => 
{
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [listaDentistas, setListaDentistas] = useState([]);
  const [dentistas, setDentistas] = useState([]);
  const params = useParams();

  
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

  return (
    <ContextGlobal.Provider value={{listaDentistas, dentistas}}>
      {children}
    </ContextGlobal.Provider>
  );
};


/*
 useEffect(()=>
  {
    const getDentista = async(params) =>
    {
      try
      {
        console.log("ID del parámetro:", params.id);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        setDentistas(res.data)
      }  catch (error)
      {
        console.log(error)
      }
    }

        getDentista(params)
    },[params])*/

