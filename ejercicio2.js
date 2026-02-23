function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "Juan" });
      } else {
        resolve({ id: 2, nombre: "María" });
      }
    }, 300);
  });
}

obtenerUsuario(1)
  .then(usuario1 => {
    return obtenerUsuario(2)
      .then(usuario2 => {
        console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
      });
  });