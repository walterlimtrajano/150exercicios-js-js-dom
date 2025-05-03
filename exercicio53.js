const removeVogais = arr => arr.map(s => s.replace(/[aeiou]/gi, ""));
console.log(removeVogais(["banana", "uva"]));