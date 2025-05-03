const consoantesDuplicadas = arr => arr.map(s => s.replace(/[^aeiou\s\d\W_]/gi, c => c + c));
console.log(consoantesDuplicadas(["casa", "bota"]));
