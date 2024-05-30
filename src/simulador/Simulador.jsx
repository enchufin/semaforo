import React from 'react';
import { numRandomEntero,colorRandom,identidadRandom, refrescarPagina } from "../utils.js";
import { useState,useMemo } from "react";


export default function Simulador() {
  /* Aquí, useMemo se utiliza para asegurar que numRandomEntero(6,20) solo se ejecute una vez, 
  cuando el componente se monta, y no en cada renderización. Esto es útil si numRandomEntero 
  fuera una función más costosa o quieres dejar claro que este valor inicial no cambiará */
      const totalPersonas = useMemo(() => numRandomEntero(6, 20), []);
      const personas = useMemo(() => numRandomEntero(1, 6), []);

      const [cruzando, setCruzando] = useState({
        pendientes: personas,
        moviendose: 0,
        hanCruzado:0,
        conjuntoRandom: totalPersonas,
        semaforo: false,
      });

      function handleToCross() {
        // Cambiamos el color del semáforo a verde
        setCruzando((prevCruzando) => ({
          ...prevCruzando,
          semaforo: true,
        }));
    
        // Variables de traspaso
        let cruzado = 0, totalPorCruzar = 0;
        // Iniciamos el intervalo definiendo el tiempo
        const intervalo = 1000;
        const periodoDeCruce = setInterval(() => {
          // Desestructurando el estado cruzando para obtener algunas propiedades en constantes
          const { pendientes, conjuntoRandom } = cruzando;
    
          // Preparamos el grupo que va a cruzar cargando las variables de traspaso
          // según el conjuntoRandom que queda por cruzar
          if (conjuntoRandom >= pendientes) totalPorCruzar = pendientes;
          else totalPorCruzar = conjuntoRandom;
    
          // Mientras los que hayan cruzado sean menos que los que faltan del total
          if (cruzado < totalPorCruzar) {
            setCruzando((prevCruzando) => ({
              ...prevCruzando,
              moviendose: prevCruzando.moviendose + 1,
              pendientes: prevCruzando.pendientes - 1,
            }));
            cruzado++;
          } else {
            clearInterval(periodoDeCruce);
            setCruzando((prevCruzando) => ({
              ...prevCruzando,
              hanCruzado: prevCruzando.hanCruzado + cruzado,
              moviendose: 0,
              semaforo: false,
              conjuntoRandom: totalPersonas
            }));
          }
        }, intervalo);
      }

      const{ pendientes, moviendose, hanCruzado, conjuntoRandom, semaforo }=cruzando
    


      return (
        <>
        <div>
          <h3>número de personas que esperan para cruzar <strong style={{color:"yellow"}} > { conjuntoRandom }</strong></h3>
        </div>
        <div>
          <button
            onClick={refrescarPagina}
            className="refrescante"
    
          >
            Juega otra vez
          </button>
        </div>

          <button onClick={handleToCross}>
            Cambia a {cruzando.semaforo ? 'Para' : 'Camina'}
          </button>
          <h1 style={{
            color: cruzando.semaforo ? 'darkgreen' : 'darkred'
          }}>
            {cruzando.semaforo ? 'Camina' : 'Para'}
          </h1>
        </>
      );
}
