import data from "./data/pokemon/pokemon.js";
const dataFunctions = {
  showPokemon: function () {
    const pokeContainer = document.querySelector(".flex-container");
    for (let i = 0; i < data.pokemon.length; i++) {
      const createPokebox = document.createElement("div");
      const pokeName = data.pokemon[i].name;
      const pokeNum = data.pokemon[i].num;
      createPokebox.className = "pokeDiv";
      createPokebox.id = "pokeDiv" + [i];
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${data.pokemon[i].img}" alt= "pokeImg${data.pokemon[i].name}" class="image" id="${data.pokemon[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
      /*console.log(createPokebox);*/
    }
  },
  searchPokemon: function () {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    const pokeDiv = [];
    for (let i = 0; i < pokeDiv.length; i++) {
      pokeDiv.push(document.getElementsByClassName("pokeDiv"));
      if (!pokeDiv[i].innerHTML.toLowerCase().includes(input,0)) {
        pokeDiv[i].style.display = "none";
      } else {
        pokeDiv[i].style.display = "flex";
      }    
      return pokeDiv
    }
  },
};
export default dataFunctions;