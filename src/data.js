import data from "./data/pokemon/pokemon.js";
const dataFunctions = {
  showPokemon: function () {
    const pokeData = data.pokemon
    this.createPokebox(pokeData);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    const pokeData = data
    pokeContainer.innerHTML = ""
    for (let i = 0; i < pokeData.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = pokeData[i].name;
      const pokeNum = pokeData[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = "pokeLi" + [i];
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${pokeData[i].img}" alt= "pokeImg${pokeData[i].name}" class="image" id="${pokeData[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
  },
  searchName: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.name.includes(input.toLowerCase());
    });
  },
  searchNumber: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.num.includes(input);
    });
  },
  searchType: function (botonescheck) {
    return data.pokemon.filter((poke) => {
      return poke.type.includes(botonescheck);
    });
  },
};

const tipo = [];
data.pokemon.forEach((pokemones) => {
  tipo.push(pokemones.type);
});
console.log(tipo.flat(2));
const cons = tipo.flat(2);
for (let i = 0; i < cons.length; i++){
  const resultado = []
  if (cons[i] !== cons[i-1]){
    resultado.push(cons[i])
    console.log (resultado)
  }
} 
export default dataFunctions;