const minusculaInvertida = arr => arr.map(s => s.toLowerCase().split("").reverse().join(""));
console.log(minusculaInvertida(["Casa", "Bola"]));
