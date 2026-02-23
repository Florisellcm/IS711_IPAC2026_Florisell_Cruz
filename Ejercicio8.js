const productos = [
{ nombre: 'Camisa', categoria: 'ropa', stock: 10 },
{ nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
{ nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];
const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);

function filtrarDisponibles(productos, categoria) {
  return productos.filter(producto => 
    producto.categoria === categoria && producto.stock > 0
  );
}