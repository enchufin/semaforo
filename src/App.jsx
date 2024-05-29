import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plantilla from "./layout/Plantilla.jsx"
import  Simulador from "./simulador/Simulador.jsx";
import Registro from "./registro/Registro.jsx";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Raíz que llama al layout general del que colgará el outlet y sus rutas*/}
          <Route path="/" element={<Plantilla/>}>
            {/*índice de entrada*/}
             <Route index element={<Simulador/>}/>
             <Route path="simulador" element={<Simulador/>}/>
             <Route path="registro" element={<Registro/>}/>
             {/*cualquier otra ruta irá al elemento indice*/}
             <Route pat="*" element={<Simulador/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
