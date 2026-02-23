const elementos = [
{ id: 1, nombre: 'A' },
{ id: 2, nombre: 'B' },
{ id: 1, nombre: 'A' }
];
const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);

function eliminarDuplicados(arreglo, propiedad) {
  const resultado = [];
  const valores = new Set();

  arreglo.forEach(item => {
    if (!valores.has(item[propiedad])) {
      valores.add(item[propiedad]);
      resultado.push(item);
    }
  });

  return resultado;
}