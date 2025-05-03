function maiusculasEInvertidas(array) {
    return array.map(str => str.toUpperCase().split('').reverse().join(''));
  }
  
  const palavras45 = ["casa", "sol", "lua"];
  console.log("Ex. 45:", maiusculasEInvertidas(palavras45));
  