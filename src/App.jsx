import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";


function App() 
{

  
  return (
      <div className="App">
        <ContextProvider>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </ContextProvider>
      </div>
  );
}

export default App;
