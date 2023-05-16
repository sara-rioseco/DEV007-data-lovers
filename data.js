import data from "./data/pokemon/pokemon.js";
const dataFunctions = {
  showPokemon: function () {
    const pokeData = data.pokemon
    this.createPokebox(pokeData);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    const pokeData = data
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
  searchType: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.type.includes(input);
    });
  },
  /*getNames: function () {
    const pokesName = data.pokemon;
    const namesArray = [];
    for (let i = 0; i < pokesName.length; i++) {
      namesArray.push(pokesName[i].name.toLowerCase());
    }
    return namesArray;
  },
  sortByName: function (pokeArray) {
    return pokeArray.sort();
  },
  sortByNameRev: function (pokeArray) {
    const pokeArraySorted = pokeArray.sort()
    return pokeArraySorted.reverse();
  },*/
  pushPokemon: function (sortedArr) {
    const pokeContainer = document.querySelector(".flex-container");
    pokeContainer.innerHTML = "";
    const pokeData = data.pokemon
    for (let i = 0; i < sortedArr.length; i++) {
      for (let j = 0; j < pokeData.length; j++) {
        if (sortedArr[i].value === pokeData[j].name) {
          this.createPokeboxcreatePokebox(pokeData[j])
        }
      }
    }
  },
};
export default dataFunctions;
