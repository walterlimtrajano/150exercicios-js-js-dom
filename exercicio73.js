const vogaisDuplicadas = arr => arr.map(s => s.replace(/[aeiou]/gi, v => v + v));
console.log(vogaisDuplicadas(["casa", "bota"]));
