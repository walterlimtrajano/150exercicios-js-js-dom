const primeiraUltimaMinuscula = arr => arr.map(s => s[0].toLowerCase() + s.slice(1, -1) + s.slice(-1).toLowerCase());
console.log(primeiraUltimaMinuscula(["Casa", "Bola"]));
