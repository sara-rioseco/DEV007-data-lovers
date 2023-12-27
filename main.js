import dataFunctions from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokeContainer = document.querySelector(".flex-container");
const pokeInput = document.getElementById("searchbar");
const searchBttn = document.getElementById("searchbutton");
const selectMenu = document.getElementById("selectmenu");
const filterMenu = document.getElementById("filtermenu");
const pokeDialog = document.getElementById("dialog-modal");
/* const countPokeDialog = document.getElementById("count-dialog");
const countPokeDialogBttn = document.getElementById("count-button"); */
const closeBttn = document.createElement("button");
closeBttn.id = "close-button";
closeBttn.className = "close-button";
closeBttn.innerHTML = "Cerrar";
const closeCountBttn = document.createElement("button");
closeCountBttn.id = "count-close-button";
closeCountBttn.className = "count-close-button";
closeCountBttn.innerHTML = "Cerrar";

dataFunctions.showPokemon();

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
    createMessage1.innerHTML += "<img src=./assets/img/HappyPikachu.png>";
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
    createMessage2.innerHTML += "<img src=./assets/img/SadPikachu.png>";
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
      openPokeDialog();
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
      openPokeDialog();
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
      openPokeDialog();
    }
  }
});

function select(e) {
  selectMenu.addEventListener("change", addActionToSelect, false);
  e.preventDefault();
}
function addActionToSelect() {
  switch (selectMenu.value) {
  case "az":
    {
      const sorted = orderListAZ();
      const pokeResult = [];
      sorted.forEach((pokemon) => {
        pokeResult.push(
          data.pokemon.find(
            (pokemonArrData) => pokemon === pokemonArrData.name
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);
      openPokeDialog();
    }
    break;
  case "za":
    {
      const sortedRev = orderListZA();
      const pokeResult = [];
      sortedRev.forEach((pokemon) => {
        pokeResult.push(
          data.pokemon.find(
            (pokemonArrData) => pokemon === pokemonArrData.name
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);
      openPokeDialog();
    }
    break;
  case "09":
    {
      const sortedNum = orderList09();
      const pokeResult = [];
      sortedNum.forEach((pokemon) => {
        pokeResult.push(
          data.pokemon.find(
            (pokemonArrData) => pokemon === pokemonArrData.num
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);
      openPokeDialog();
    }
    break;
  case "90":
    {
      const sortedNumRev = orderList90();
      const pokeResult = [];
      sortedNumRev.forEach((pokemon) => {
        pokeResult.push(
          data.pokemon.find(
            (pokemonArrData) => pokemon === pokemonArrData.num
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);
      openPokeDialog();
    }
    break;
  default:
  }
}

function orderListAZ() {
  const onScreenList = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < onScreenList.length; i++) {
    sortedList.push(onScreenList[i].innerText.slice(5).toLowerCase());
  }
  return sortedList.sort();
}

function orderListZA() {
  const onScreenList = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < onScreenList.length; i++) {
    sortedList.push(onScreenList[i].innerText.slice(5).toLowerCase());
  }
  return sortedList.sort().reverse();
}

function orderList09() {
  const onScreenList = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < onScreenList.length; i++) {
    sortedList.push(onScreenList[i].innerText.slice(0, 3));
  }
  return sortedList.sort();
}

function orderList90() {
  const onScreenList = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < onScreenList.length; i++) {
    sortedList.push(onScreenList[i].innerText.slice(0, 3));
  }
  return sortedList.sort().reverse();
}

window.addEventListener("load", select);

function filterSelect(e) {
  filterMenu.addEventListener("change", addActionToFilter, false);
  e.preventDefault();
}
function addActionToFilter() {
  switch (filterMenu.value) {
  case "fire":
    {
      const result = dataFunctions.checkFilter("fire");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "water":
    {
      const result = dataFunctions.checkFilter("water");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "poison":
    {
      const result = dataFunctions.checkFilter("poison");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "ice":
    {
      const result = dataFunctions.checkFilter("ice");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "fairy":
    {
      const result = dataFunctions.checkFilter("fairy");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "rock":
    {
      const result = dataFunctions.checkFilter("rock");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "normal":
    {
      const result = dataFunctions.checkFilter("normal");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "ground":
    {
      const result = dataFunctions.checkFilter("ground");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "dark":
    {
      const result = dataFunctions.checkFilter("dark");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "ghost":
    {
      const result = dataFunctions.checkFilter("ghost");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "flying":
    {
      const result = dataFunctions.checkFilter("flying");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "dragon":
    {
      const result = dataFunctions.checkFilter("dragon");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "steel":
    {
      const result = dataFunctions.checkFilter("steel");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "bug":
    {
      const result = dataFunctions.checkFilter("bug");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "electric":
    {
      const result = dataFunctions.checkFilter("electric");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "psychic":
    {
      const result = dataFunctions.checkFilter("psychic");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "grass":
    {
      const result = dataFunctions.checkFilter("grass");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  case "fighting":
    {
      const result = dataFunctions.checkFilter("fighting");
      dataFunctions.createPokebox(result);
      openPokeDialog();
    }
    break;
  default:
  }
}

window.addEventListener("load", filterSelect);

function openPokeDialog() {
  const pokeLiOnScreen = document.querySelectorAll("li");
  pokeDialog.style.display = "flex";
  pokeLiOnScreen.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
      showDialog();
      printPokeDetails(pokemon.innerText.slice(5).toLowerCase());
    });
  });
}

function printPokeDetails(pokemon) {
  const pokeData = data.pokemon;
  const pokeDialogUpperDiv = document.createElement("div");
  const pokeDialogMiddleDiv = document.createElement("div");
  const pokeDialogLowerDiv = document.createElement("div");
  const pokeDialogLowestDiv = document.createElement("div");
  const pokeDetails = pokeData.find((poke) => pokemon === poke.name);
  const pokeTypes = pokeDetails.type;
  const pokeImgSrcArr = dataFunctions.createImgSrcArr(pokeTypes);
  const createTypeImg = dataFunctions.createImg(pokeImgSrcArr);
  const pokeResistant = pokeDetails.resistant;
  const pokeWeakness = pokeDetails.weaknesses;
  const pokeResistantTranslated = dataFunctions.translateType(pokeResistant);
  const pokeWeaknessTranslated = dataFunctions.translateType(pokeWeakness);
  const pokeAttackQuick = pokeDetails["quick-move"];
  const pokeAttackSpecial = pokeDetails["special-attack"];
  const pokeAttackQuickList = dataFunctions.showAttacks(pokeAttackQuick);
  const pokeAttackSpecialList = dataFunctions.showAttacks(pokeAttackSpecial);
  const pokeEvolutionsResult = dataFunctions.joinEvolutions(pokeDetails);
  pokeDialogUpperDiv.className = "dialog-div";
  pokeDialogUpperDiv.id = "dialog-upper-div";
  pokeDialogMiddleDiv.className = "dialog-div";
  pokeDialogLowerDiv.className = "dialog-lower-div";
  pokeDialogLowerDiv.id = "dialog-lower-div";
  pokeDialogLowestDiv.className = "dialog-div";
  pokeDialogLowestDiv.id = "dialog-lowest-div";
  pokeDialogUpperDiv.innerHTML += `<h2>${
    pokeDetails.num
  }</h2><h2>${pokeDetails.name.toUpperCase()}</h2><h2 id="img-container">${createTypeImg}</h2>`;
  pokeDialogMiddleDiv.innerHTML += `<img src= "${pokeDetails.img}" alt= "pokeImg${pokeDetails.name}" class="image">`;
  pokeDialogLowerDiv.innerHTML += `<h3> Resistente a: ${pokeResistantTranslated.join(
    ", "
  )}<h3><h3>Débil frente a: ${pokeWeaknessTranslated.join(
    ", "
  )}</h3><h3>Ataque(s) rápido(s): ${pokeAttackQuickList}</h3><h3>Ataque(s) cargado(s): ${pokeAttackSpecialList}</h3><h3>Tasa de Aparación: ${dataFunctions.evaluateCaptureRate(
    pokeDetails["spawn-chance"]
  )}<br>Tasa de Captura: ${dataFunctions.evaluateCaptureRate(
    pokeDetails.encounter["base-capture-rate"]
  )}<br>Tasa de Huída: ${dataFunctions.evaluateCaptureRate(
    pokeDetails.encounter["base-flee-rate"]
  )}</h3>`;
  pokeDialogLowestDiv.innerHTML += `<h3>Evoluciones: ${pokeEvolutionsResult}</h3>`;
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogUpperDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogMiddleDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowerDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowestDiv);
}

function showDialog() {
  pokeDialog.insertAdjacentElement("beforeend", closeBttn);
  pokeDialog.showModal();
  closePokeDialog();
}

function closePokeDialog() {
  const pokeDialogCloseBttn = document.getElementById("close-button");
  pokeDialogCloseBttn.addEventListener("click", () => closeDialog());
}

function closeDialog() {
  pokeDialog.close();
  pokeDialog.innerHTML = "";
}

/* countPokeDialogBttn.addEventListener("click", () => {
  showCountDialog();
});

function countPokeOnScreen() {
  const pokeLiOnScreen = document.getElementsByTagName("li");
  return pokeLiOnScreen.length;
}

function showCountDialog() {
  const pokeLiOnScreen = countPokeOnScreen();
  const messageContainer = document.createElement("h2");
  messageContainer.id = "message-container";
  messageContainer.className = "message-container";
  messageContainer.innerHTML = `En este momento hay ${pokeLiOnScreen} pokemon(es) en pantalla.`;
  countPokeDialog.insertAdjacentElement("beforeend", messageContainer);
  countPokeDialog.insertAdjacentElement("beforeend", closeCountBttn);
  countPokeDialog.showModal();
  closeCountPokeDialog();
}

function closeCountPokeDialog() {
  const pokeDialogCloseBttn = document.getElementById("count-close-button");
  pokeDialogCloseBttn.addEventListener("click", () => closeCountDialog());
}

function closeCountDialog() {
  countPokeDialog.close();
  countPokeDialog.innerHTML = "";
} */

window.addEventListener("load", openPokeDialog());
