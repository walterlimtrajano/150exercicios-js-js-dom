const maiusculaInvertida = arr => arr.map(s => s.toUpperCase().split('').reverse().join(''));
console.log(maiusculaInvertida(["casa", "bola"]));
