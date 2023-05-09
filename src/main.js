import dataFunctions from "./data.js";

dataFunctions.showPokemon();

const pokeContainer = document.querySelector(".flex-container");
const pokeInput = document.getElementById("searchbar");
const searchBttn = document.getElementById("searchbutton");

searchBttn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchResult = dataFunctions.pokeNames(pokeInput.value.toLowerCase());
  pokeContainer.innerHTML = ""
  for (let i = 0; i < searchResult.length; i++) {
    const createPokebox = document.createElement("li");
    const pokeName = searchResult[i].name;
    const pokeNum = searchResult[i].num;
    createPokebox.className = "pokeLi";
    createPokebox.id = "pokeLi" + [i];
    createPokebox.innerHTML += pokeNum.toString();
    createPokebox.innerHTML += "<br>";
    createPokebox.innerHTML += `<img src= "${searchResult[i].img}" alt= "pokeImg${searchResult[i].name}" class="image" id="${searchResult[i].id}">`;
    createPokebox.innerHTML += "<br>";
    createPokebox.innerHTML += pokeName.toUpperCase();
    pokeContainer.insertAdjacentElement("beforeend", createPokebox);
  }
});
