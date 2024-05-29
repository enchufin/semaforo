import React from 'react';
import { numRandomEntero,colorRandom,identidadRandom } from "../utils.js";
import { useState,useMemo } from "react";


export default function Simulador() {
  /* Aquí, useMemo se utiliza para asegurar que numRandomEntero(6,20) solo se ejecute una vez, 
  cuando el componente se monta, y no en cada renderización. Esto es útil si numRandomEntero 
  fuera una función más costosa o quieres dejar claro que este valor inicial no cambiará */
const totalPersonas = useMemo(()=>{numRandomEntero(6,20),[]});
const personas = useMemo(() =>{numRandomEntero(1,6), []})

      const [cruzando, setCruzando] = useState({
        pendientes: personas,
        moviendose: 0,
        hanCruzado:0,
        conjuntoRandom: totalPersonas,
        semaforo: false,
      });

      function handleToCross() {
        /* Cambiamos el color del semáforo a verde */
        setCruzando(()=>(
          {...cruzando,
          semaforo: true}
        ));

        /* variables de traspaso */
        let cruzado = 0, totalPorCruzar = 0;
        //iniciamos el intervalo definiendo el tiempo
        const intervalo = 1000;
        const periodoDeCruce = setInterval(() => {         
        //desestructurando el estado cruzando para obtener algunas propiedades en constantes
        const {pendientes, conjuntoRandom} = cruzando;
        
        /*preparamos el grupo que va a cruzar cargando las variables de traspaso 
        según el conjuntoRandom que queda por cruzar */
        if(conjuntoRandom>=pendientes) totalPorCruzar = pendientes;
        else totalPorCruzar = conjuntoRandom;
        
        //mientras los que hayan cruzado sean menos que los que faltan del total

        if(cruzado<conjuntoRandom){}

        }, intervalo);

      }
    


      return (
        <>
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
