/* PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe 
activar un software que permita clasificar su dieta:
    alimento = {
    nombre,
    tipo (Puede ser vegetal, animal, insecto),
    nivel de energía (números entre 100-500)
    }
Cree un programa que permita recibir 50 alimentos diferentes y
mediante una función primaria después de 5 segundos se
pueda obtener solo los alimentos de tipo vegetal que entreguen
mas de 200 unidades de energía. Finalmente, una función
callback debe permitir entregar la sumatoria de niveles de
energía entregados por los alimentos vegetales consumidos en
la dieta de Grogu */

function crearAlimentos(cantidad) {
  let lista = [];
  for (let index = 0; index < cantidad; index++) {
    lista.push({
      nombre: generarNombreRandom(),
      tipo: generarTipoRandom(),
      nivel: generarNivelRandom(),
    });
  }
  return lista;
}

function generarNombreRandom() {
  return (Math.random() + 1).toString(36).substring(2);
}
function generarTipoRandom() {
  const listaTipos = ["insecto", "vegetal", "animal"];
  const index = Math.floor(Math.random() * 3);
  return listaTipos[index];
}
function generarNivelRandom() {
  return Math.floor(Math.random() * 400) + 100;
}

const alimentos = crearAlimentos(50)

// ================================================================================================

function main (alimentos, callback) {
    setTimeout(() => {
      console.log('Alimentos Vegetales que su nivel es mayor a 200 (nivel > 200)')
      console.log(alimentos.filter(alimento => {
        return alimento.tipo === 'vegetal' && alimento.nivel > 200
      }))
    }, 5000);
    callback(alimentos.filter(alimento => {
      return alimento.tipo === 'vegetal'
    }))
}
main(alimentos, function(alimentosVegetales) {
  let sumatoriaNivel = 0
  for (let index = 0; index < alimentosVegetales.length; index++) {
    const alimento = alimentosVegetales[index];
    sumatoriaNivel += alimento.nivel
  }
  console.log('Todos los Alimentos Vegetales')
  console.log(alimentosVegetales);
  console.log('Sumatoria de los niveles de todos los alimentos vegetales')
  console.log(sumatoriaNivel);
});

// ================================================================================================
