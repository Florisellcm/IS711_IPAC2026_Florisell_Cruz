//Dado un arreglo de objetos con valores y pesos, 
// calcula el promedio ponderado.

const notas = [
{ valor: 90, peso: 0.5 },
{ valor: 80, peso: 0.3 },
{ valor: 70, peso: 0.2 }
];
const resultado = promedioPonderado(notas);
console.log(resultado);
function promedioPonderado(notas) {
  let suma = 0;

  notas.forEach(nota => {
    suma += nota.valor * nota.peso;
  });

  return suma;
}