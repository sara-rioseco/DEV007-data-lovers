/*import { pokeSearch } from "./data.js";*/
import data from "./data/pokemon/pokemon.js";

function showPokemon() {
  const pokeContainer = document.querySelector(".flex-container");
  for (let i = 0; i < data.pokemon.length; i++) {
    const createPokebox = document.createElement("div");
    const pokeName = data.pokemon[i].name
    const pokeNum = data.pokemon[i].num
    createPokebox.className = "pokeDiv";
    createPokebox.id = "pokeDiv" + [i]
    createPokebox.innerHTML += pokeNum.toString()
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += `<img src= "${data.pokemon[i].img}" alt= "pokeImg${data.pokemon[i].name}" class="image" id="${data.pokemon[i].id}">`;
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += pokeName.toUpperCase()
    pokeContainer.insertAdjacentElement("beforeend", createPokebox)
    console.log(createPokebox)
  }
}
showPokemon();


/*function searchPokemon () {
  const input = document.getElementById("searchbar");
  const filter = input.value.toUpperCase();
  const pokeContainer = document.getElementById("flex-container");
  const pokeDiv = pokeContainer.getElementsByClassName("pokeDiv");
  for (let i=0; i<pokeDiv.length; i++) {
    const boxDiv = pokeDiv[i].getElementsByClassName("pokeDiv")[0];
    const txtValue = boxDiv.textContent || boxDiv.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      pokeDiv[i].style.display = "";
    } else {
      pokeDiv[i].style.display = "none";
    }
  }
}*/
