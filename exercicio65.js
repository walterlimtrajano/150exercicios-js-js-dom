const removeConsoantes = arr => arr.map(s => s.replace(/[^aeiou]/gi, ""));
console.log(removeConsoantes(["banana", "casa"]));
