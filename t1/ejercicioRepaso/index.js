// 8. Genera un número aleatorio entre 50 y 100 (inclusive).

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(random(50,100))
// 9. Genera un número aleatorio entre 0 y 255 (inclusive).

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(random(0,255))

// 10.Accede a un carácter aleatorio de la cadena "JavaScript".

function randomCaracter() {
    const text = "javascript" 
  
    const random = Math.floor(Math.random() * text.length)
    return text[random]
}
console.log(randomCaracter())

// 11. Usa console.log() y caracteres de escape para imprimir el siguiente patrón:
// 11111
// 21248
// 3 1 3 9 27
// 4 1 4 16 64
// // 5 1 5 25 125



// 12. Usa substr() para extraer la frase "because because because" de la oración "You
// cannot end a sentence with because because because is a conjunction".

const frase = "You cannot end a sentence with because because because is a conjunction";
// console.log(frase.length)
console.log(frase.substring(30,55))

// Ejercicio: Nivel 3


// En la frase "Love is the best thing in this world. Some found their love and some
// are still looking for their love.", cuenta cuántas veces aparece la palabra "love".