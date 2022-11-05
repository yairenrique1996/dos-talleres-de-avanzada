/* 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de 
acceso a las naves de guerra los cuáles reposan en la base de datos 
central, para ello debe programar una función que permita recibir la 
palabra clave de cada nave y separar imprimiendo solo el nombre del 
piloto asignado a cada nave. 
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn */

/* FUNCION TRADICIONAL
declarando función

function obtenerNombre(codigo) {
  let nombre = codigo.split(":")[1]
  return nombre
}

// llamando funcion
let resultado = obtenerNombre("ARQ2555: Sara Bel-Sun, ARQ2556: Nodin Chavdri ,ARQ2557: Fin")
console.log(resultado) */




//PASANDO A FUNCION FLECHA

let obtenerNombre = codigo =>codigo.split(":")[1] 
let resultado1 = obtenerNombre("ARQ2555: Sara Bel-Sun")
console.log("El piloto se llama " + resultado1)
