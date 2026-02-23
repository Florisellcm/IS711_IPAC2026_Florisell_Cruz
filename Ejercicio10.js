const edades = [19, 25, 32, 17];
const resultado = verificarMayoresDeEdad(edades);
console.log(resultado);

function verificarMayoresDeEdad(edades) {
  return edades.every(edad => edad >= 18);
}