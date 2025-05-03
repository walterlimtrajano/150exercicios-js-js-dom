const primeiraMinusculaUltimaMaiuscula = arr => arr.map(s => s[0].toLowerCase() + s.slice(1, -1) + s.slice(-1).toUpperCase());
console.log(primeiraMinusculaUltimaMaiuscula(["Casa", "Bola"]));
