// Ejercicio 1: Declaración y recorrido de arrays

const animales = ["gato", "perro", "pajaro", "caballo", "serpiente"];

const first = animales.shift();
const last = animales.pop();
console.log(first, last);

if (animales.length < 0) {
  alert("No hay animales");
}

animales.forEach((animales, index) => {
  console.log(animales, index);
});

// Ejercicio 2: Modificación del contenido

const nuevoAnimal = animales.push("mono");
console.log(nuevoAnimal);

const eliminarAnimal = animales.shift("gato");
console.log(eliminarAnimal);

console.log(animales);
// 2. Inserta un nuevo elemento en la segunda posición usando splice().
const modificarElemento = animales.splice(1, 1, "raton");
// 3. Muestra el contenido del array antes y después de cada operación para comprobar los cambios.
console.log(animales);

// Ejercicio 3: Transformación y filtrado

// 1. Aplica map() para transformar el array original (por ejemplo: convertir todos los elementos a mayúsculas o añadir una etiqueta personalizada).
const newArray = animales.map(function (elemento) {
  return elemento.toLocaleUpperCase();
});

console.log(newArray);

// 2. Usa filter() para generar un nuevo array que solo contenga elementos que cumplan una condición (por ejemplo: que tengan más de 6 letras).

const result = animales.filter((animal) => animal.length > 6);

// 3. Muestra los resultados utilizando console.log() o console.table().
console.log(result);

// Ejercicio 4: Validación y documentación del código

// Depura y documenta el código

// 1. Verifica que el array contiene elementos antes de recorrerlo.

// 2. Añade comentarios explicativos antes de cada bloque del código.

// 3. Utiliza trazas (console.log()) para mostrar valores y comprobar errores.

// 4. Incluye un comentario inicial que resuma el objetivo del script y su estructura.
