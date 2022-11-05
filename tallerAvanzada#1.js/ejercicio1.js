/* 1.  Yoda el maestro jedi, necesita enseñar a sus aprendices 
Padawan a calcular la distancia a la que cualquiera de los planetas de la 
ruta N-14 pertenecientes a la ruta comercial de la federación 
intergaláctica, se encuentra del planeta NABOO.  */

/* función tradicional
function calcularDistancia(x1,x2,y1,y2)
let restax = x2-x1
let restay = y2-y1
let potenciax = Math.pow(restax, 2)
let potenciay = Math.pow(restax, 2)
let sumaPotencias = potenciax + potenciay
let raizCuadrada = Math.sqrt(sumaPotencias)

return (raizCuadrada)
 */

// PASANDO A LA FUNCION FLECHA

let calcularDistancia = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//llamando a la función

let distancia = calcularDistancia(0, 0, 12, 0);
console.log(`la distancia calculada fue ${distancia}`);

