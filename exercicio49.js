const ultimaMaiuscula = arr => arr.map(s => s.slice(0, -1) + s.slice(-1).toUpperCase());
console.log(ultimaMaiuscula(["casa", "bola"]));