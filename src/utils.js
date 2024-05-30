
 export function numRandomEntero(min, max){
      return (Math.floor(Math.random()*(max - min + 1))+min);
    }
    
 export function colorRandom() {
      const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
      return colores[numRandomEntero(0, colores.length - 1)];
    }

 export function identidadRandom() {
      const identidad = ["cuadrado", "circulo", "triangulo"];
      return identidad[numRandomEntero(0, identidad.length - 1)];
    }
    

    export function refrescarPagina() {
      window.location.reload(false);
    }