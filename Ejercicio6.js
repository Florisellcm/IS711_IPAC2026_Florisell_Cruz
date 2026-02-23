const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];
const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);

function combinarListasSinRepetir(lista1, lista2) {
  return [...new Set([...lista1, ...lista2])];
}