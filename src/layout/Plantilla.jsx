import { Outlet, Link } from "react-router-dom";
import Footer  from "./Footer.jsx";

export default function Plantilla () {

      return (
            <>
            <div className="contenedor">
                  <header>
                        <h1 className="tituloApp">
                              Simulador de tráfico de unidades random
                        </h1>
                        <nav>
                              <ul className="enlaces">
                                    <li><Link to="simulador">Simulador</Link></li>
                                    <li><Link to="registro">Registro de simulaciones</Link></li>
                              </ul>
                        </nav>
                        
                  </header>
                  <main>
                        <Outlet />
                  </main>
                  <Footer />
            </div>            
            </>
      );

}