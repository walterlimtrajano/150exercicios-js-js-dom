function divisiveisPorDois(numeros) {
    return numeros.filter(num => num % 2 === 0);
  }
  
  const numeros44 = [1, 2, 3, 4, 5, 6];
  console.log("Ex. 44:", divisiveisPorDois(numeros44));
  