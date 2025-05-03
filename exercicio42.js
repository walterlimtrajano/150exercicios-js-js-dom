function maisDeCincoCaracteres(array) {
    return array.filter(str => str.length > 5);
  }
  
  const palavras42 = ["casa", "computador", "sol", "internet"];
  console.log("Ex. 42:", maisDeCincoCaracteres(palavras42));
  