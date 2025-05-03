function formatarParaDuasCasas(numeros) {
    return numeros.map(num => num.toFixed(2));
  }
  
  const numeros39 = [1, 2.345, 5.6789];
  console.log("Ex. 39:", formatarParaDuasCasas(numeros39));
  