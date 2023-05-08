import dataFunctions from "./data.js";

const bttn = document.getElementById("searchbutton");
const input = document.getElementById("searchbar");
dataFunctions.showPokemon();
bttn.addEventListener("click", (event) => {
  event.dataFunctions.searchPokemon();
  console.log(input.value)
});
