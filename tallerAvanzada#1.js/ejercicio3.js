/* 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día */

//FUNCION TRADICIONAL

/* function promedio(temperaturas) {
  let tempMaxima = Math.max(...temperaturas);
  let tempMinima = Math.min(...temperaturas);

  let promedio = (tempMaxima + tempMinima) / 2;

  console.log("La tempertura máxima fue de: " + tempMaxima);
  console.log("La tempertura mnima fue de: " + tempMinima);
  console.log("La tempertura promedio fue de: " + promedio);
}

promedio([17, 35, 26, 65]); */


//PASANDO A FUNCION FLECHA

let promedio = (temperaturas) => {

    let tempMaxima = Math.max(...temperaturas);
    let tempMinima = Math.min(...temperaturas);
    
    
    let promedio = (tempMaxima + tempMinima) / 2;
    
    console.log("La tempertura maxima fue de: " + tempMaxima)
    console.log("La tempertura minima fue de: " + tempMinima)
     console.log("La tempertura promedio fue de: " + promedio);
    }
    
    promedio([17, 35, 26, 65])
