// Tema 1: Fundamentos de JavaScript - Basico

// 1. Escribe un comentario de una sola línea que diga: los comentarios pueden
// hacer que el código sea legible.

// los comentarios pueden  hacer que el código sea legible.

// 2. Escribe otro comentario de una sola línea que diga: Bienvenido a JavaScript.
// Bienvenido JS
// 3. Escribe un comentario multilínea que diga: los comentarios pueden hacer que el código sea legible, fácil de reutilizar e informativo.

/** Bienvenido

los comentarios pueden hacer que el código sea legible,
  fácil de reutilizar e informativo
 **/

// 4. Crea un archivo variable.js y declara algunas variables asignando los tipos de  datos string, booleano, undefined y null.

// 5. Crea un archivo datatypes.js y utiliza el operador typeof de JavaScript para
// verificar los diferentes tipos de datos. Comprueba el tipo de cada variable.
// 6. Declara cuatro variables sin asignar valores.
// 7. Declara cuatro variables con valores asignados.
// 8. Declara variables para almacenar tu nombre, apellido, estado civil, país y edad
// en múltiples líneas.
// 9. Declara variables para almacenar tu nombre, apellido, estado civil, país y edad
// en una sola línea.
// 10.Declara dos variables miEdad y tuEdad, asígnales valores iniciales y muestra los
// valores en la consola.

// 8. Genera un número aleatorio entre 50 y 100 (inclusive).

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(50, 100));
// 9. Genera un número aleatorio entre 0 y 255 (inclusive).

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(0, 255));

// 10.Accede a un carácter aleatorio de la cadena "JavaScript".

function randomCaracter() {
  const text = "javascript";

  const random = Math.floor(Math.random() * text.length);
  return text[random];
}
console.log(randomCaracter());

// 11. Usa console.log() y caracteres de escape para imprimir el siguiente patrón:
// 11111
// 21248
// 3 1 3 9 27
// 4 1 4 16 64
// // 5 1 5 25 125

// 12. Usa substr() para extraer la frase "because because because" de la oración "You
// cannot end a sentence with because because because is a conjunction".

const frase =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(frase.length)
console.log(frase.substring(30, 55));

// Ejercicio: Nivel 3

// En la frase "Love is the best thing in this world. Some found their love and some
// are still looking for their love.", cuenta cuántas veces aparece la palabra "love".
