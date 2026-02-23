
const persona = { nombre: 'Luis', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona);

function modificarPersona(persona, nuevoNombre) {
  return {
    ...persona,
    nombre: nuevoNombre,
    edad: persona.edad + 1
  };
}