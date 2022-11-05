/* 7.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta 
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, 
como distractor el imperio ha creado planos falsos y se tiene el dato de 
que el número de serie de estos planos falsos comienza por encima del 
número 10; es decir todos los planos falsos tienen números de serie 
consecutivos comenzando desde el #11. SOLO si se obtiene un plano
verdadero Chewbacca y Han pueden abordar su nave y ejecutar un 
mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks */

//FUNCION TRADICIONAL

/* function filtrarPlanos(planos, arrancarNave) {
  let filtro = planos.filter(function (plano) {
    return plano >= 1 && plano <= 10;
  });
  arrancarNave(filtro);
}
let planos = [1, 100, 200, 300, 400, 500];

filtrarPlanos(planos, function (filtro) {
  let cuenta = filtro.length;
  if (cuenta > 0) {
    console.log("Arrancando la nave");
  } else {
    console.log("Nos quedamos buscando los planos");
  }
}); */

//AHORA PASAMOS A FUNCION FLECHA

let filtrarPlanos1 = (planos1, arrancarNave) => {
  let filtro = planos1.filter(function (plano1) {
    return plano1 >= 1 && plano1 <= 10;
  });
  arrancarNave(filtro);
};

let planos1 = [-1, 100, 200, 12, 34, 58];

filtrarPlanos1(planos1, function (filtro) {
  let cuenta = filtro.length;
  if (cuenta > 0) {
    console.log("Arrancando la nave");
  } else {
    console.log("Nos quedamos buscando los planos");
  }
});
