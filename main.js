import dataFunctions from "./data.js";

dataFunctions.showPokemon();

const pokeContainer = document.querySelector(".flex-container");
const pokeInput = document.getElementById("searchbar");
const searchBttn = document.getElementById("searchbutton");
const selectMenu = document.getElementById("selectmenu");

searchBttn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchNameResult = dataFunctions.searchName(
    pokeInput.value.toLowerCase()
  );
  const searchNumberResult = dataFunctions.searchNumber(pokeInput.value);
  const searchTypeResult = dataFunctions.searchType(
    pokeInput.value.toLowerCase()
  );
  pokeContainer.innerHTML = "";
  if (pokeInput.value === "") {
    const createMessage1 = document.createElement("div");
    createMessage1.id = "noinput";
    createMessage1.className = "messages";
    createMessage1.innerHTML +=
      "<h2> Por favor, ingresa el nombre, número o tipo de Pokemon para buscar.</h2>";
    createMessage1.innerHTML += "<img src=./img/HappyPikachu.png>";
    pokeContainer.insertAdjacentElement("beforeend", createMessage1);
  } else if (
    searchNameResult.toString() === "" &&
    searchNumberResult.toString() === "" &&
    searchTypeResult.toString() === ""
  ) {
    const createMessage2 = document.createElement("div");
    createMessage2.id = "notfoundmessage";
    createMessage2.className = "messages";
    createMessage2.innerHTML +=
      "<h2> Lo sentimos, tu búsqueda no ha dado resultados.</h2>";
    createMessage2.innerHTML += "<img src=./img/SadPikachu.png>";
    pokeContainer.insertAdjacentElement("beforeend", createMessage2);
  } else {
    for (let i = 0; i < searchNameResult.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = searchNameResult[i].name;
      const pokeNum = searchNameResult[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = "pokeLi" + [i];
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${searchNameResult[i].img}" alt= "pokeImg${searchNameResult[i].name}" class="image" id="${searchNameResult[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
    for (let i = 0; i < searchNumberResult.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = searchNumberResult[i].name;
      const pokeNum = searchNumberResult[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = "pokeLi" + [i];
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${searchNumberResult[i].img}" alt= "pokeImg${searchNumberResult[i].name}" class="image" id="${searchNumberResult[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
    for (let i = 0; i < searchTypeResult.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = searchTypeResult[i].name;
      const pokeNum = searchTypeResult[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = "pokeLi" + [i];
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${searchTypeResult[i].img}" alt= "pokeImg${searchTypeResult[i].name}" class="image" id="${searchTypeResult[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
  }
});

function select(event) { 
  selectMenu.addEventListener("change", addAction, false);
  event.preventDefault();
}
function addAction() {
  const namesToSort = dataFunctions.getNames();
  const sorted = dataFunctions.sortByName(namesToSort);
  const sortedrev = dataFunctions.sortByNameRev(sorted)
  switch (selectMenu.value) {
  case "az":
    dataFunctions.pushPokemon(sorted);
    break;
  case "za":
    dataFunctions.pushPokemon(sortedrev);
    break;
  }
}
window.addEventListener("load", select, false);
