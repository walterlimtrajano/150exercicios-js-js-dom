const primeiraUltimaMaiuscula = arr => arr.map(s => s[0].toUpperCase() + s.slice(1, -1) + s.slice(-1).toUpperCase());
console.log(primeiraUltimaMaiuscula(["casa", "bola"]));
