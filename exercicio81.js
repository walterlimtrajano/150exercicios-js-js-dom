const primeiraMaiusculaUltimaMinuscula = arr => arr.map(s => s[0].toUpperCase() + s.slice(1, -1) + s.slice(-1).toLowerCase());
console.log(primeiraMaiusculaUltimaMinuscula(["casa", "bola"]));
