/* 4.QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables. */

//FUNCION TRADICIONAL

let sablesDeLuz = [];
sablesDeLuz.push(1,5,-10,30-50,40,100,-200);

function buscarSablesDeLuz(sablesDeLuz){
    let filtro = sablesDeLuz.filter(function(filtro){
        return filtro < 0 ;
    })
    let negativos = filtro.length;
    console.log('la cantidad de energia de sables que tienen negativa es  de '+ negativos)
    console.log ("y son los siguientes : " + filtro)
}

buscarSablesDeLuz(sablesDeLuz)


//AHORA PASAMOS A LA FUNCION FLECHA

/* let sablesDeLuz1 = [];
sablesDeLuz1.push(1,5,-10,30-50,40,100,-200);

let buscarSablesDeLuz = sablesDeLuz1 => {
    let filtro = sablesDeLuz1.filter(function(filtro){
        return filtro < 0 ;
    })
    console.log('la cantidad de energia de sables que tienen negativa es  de '+ filtro.length)
    console.log ("y son los siguientes : " + filtro)
}
buscarSablesDeLuz(sablesDeLuz1)
 */