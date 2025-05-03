function primeiraMaiuscula(array) {
    return array.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }
  
  const nomes41 = ["ana", "bruno", "carla"];
  console.log("Ex. 41:", primeiraMaiuscula(nomes41));
  