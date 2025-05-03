function contemLetraE(array) {
    return array.filter(str => str.includes("e"));
  }
  
  const palavras46 = ["mesa", "copo", "janela", "porta"];
  console.log("Ex. 46:", contemLetraE(palavras46));
  