const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 
'gracias'];
const resultado = contarPalabras(palabras);
console.log(resultado);
function contarPalabras(arreglo) {
  const contador = {};

  arreglo.forEach(palabra => {
    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  });

  return contador;
}