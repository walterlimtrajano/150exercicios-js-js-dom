const vogaisTriplicadas = arr => arr.map(s => s.replace(/[aeiou]/gi, v => v + v + v));
console.log(vogaisTriplicadas(["casa", "bola"]));
