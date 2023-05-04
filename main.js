import data from "./data/pokemon/pokemon.js";

function showPokemon() {
  const pokeContainer = document.querySelector(".flex-container");
  for (let i = 0; i < data.pokemon.length; i++) {
    const createPokebox = document.createElement("div");
    const pokeName = data.pokemon[i].name
    const pokeNum = data.pokemon[i].num
    createPokebox.className = "pokeDiv";
    createPokebox.innerHTML += pokeNum.toString()
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += `<img src= "${data.pokemon[i].img}" alt= "pokeImg${data.pokemon[i].name}" class="image" id="${data.pokemon[i].id}">`;
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += pokeName.toUpperCase()
    pokeContainer.insertAdjacentElement("beforeend", createPokebox)
  }
}
showPokemon();