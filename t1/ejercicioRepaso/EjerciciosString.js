// Ejercicio: Nivel 1

// 1. Declara una variable llamada challenge y asígnale el valor inicial 'I Love Days Of
// JavaScript'.
const challenge = "javascript";

// 2. Imprime la cadena en la consola del navegador utilizando console.log().
console.log(challenge);
// 3. Imprime la longitud de la cadena en la consola del navegador utilizando
// console.log().
console.log(challenge.length);
// 4. Convierte todos los caracteres de la cadena a mayúsculas usando el método
// toUpperCase().
challenge.toLocaleLowerCase();
// 5. Convierte todos los caracteres de la cadena a minúsculas usando el método
// toLowerCase().
challenge.toLocaleLowerCase();
// 6. Corta (slice) la primera palabra de la cadena usando los métodos substr() o
// substring().

// 7. Extrae la frase "Days Of JavaScript" de "I Love Days Of JavaScript".
const cadenaFrase = "I Love Days Of JavaScript";
console.log(cadenaFrase.length);
const cortar = cadenaFrase.substring(7, 25);
console.log(cortar);

// 8. Verifica si la cadena contiene la palabra "Script" usando el método includes().
console.log(cadenaFrase.includes("JavaScript"));
// 9. Divide la cadena en un array utilizando el método split().
console.log(cadenaFrase.split(" "));
// 10.Divide la cadena "I Love Days Of JavaScript" en espacios utilizando el método split().

// 11.Divide la cadena 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' en un array separando por comas.
const companias = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companias.split(","));

// 12.Reemplaza "I Love Days Of JavaScript" por "I Love Days Of Python" usando el método replace().
const replace = "I Love Days Of JavaScript";
const makeReplace = replace.replace(replace, "I Love Days Of Python");
console.log(makeReplace);

// 13.Encuentra el carácter en el índice 15 en la cadena "I Love Days Of JavaScript" usando el método charAt().

console.log(replace.charAt(15));
// 14.Encuentra el código de carácter de 'J' en la cadena "I Love Days Of JavaScript" usando charCodeAt().

console.log(replace.charCodeAt("J"));

// 15.Usa indexOf() para determinar la posición de la primera aparición de la letra 'a' en la cadena "I Love Days Of JavaScript".

// 16.Usa lastIndexOf() para determinar la posición de la última aparición de la letra 'a' en la cadena "I Love Days Of JavaScript".

// 17.Usa indexOf() para encontrar la primera aparición de la palabra "because" en la frase: "You cannot end a sentence with because because because is a
// conjunction".
// 18.Usa lastIndexOf() para encontrar la última aparición de la palabra "because" en la misma frase.

// 19.Usa search() para encontrar la primera aparición de la palabra "because" en la misma frase.

// 20.Usa trim() para eliminar espacios en blanco al inicio y al final de la cadena " I Love Days Of JavaScript ".

// 21.Usa startsWith() en la cadena "I Love Days Of JavaScript" para obtener true.

// 22.Usa endsWith() en la cadena "I Love Days Of JavaScript" para obtener true.

// 23.Usa match() para encontrar todas las letras 'a' en "I Love Days Of JavaScript".

// 24.Usa concat() para unir "I Love Days of" y "JavaScript" en una sola cadena.

// 25.Usa repeat() para imprimir "I Love Days Of JavaScript" dos veces.
