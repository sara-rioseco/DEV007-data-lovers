import dataFunctions from "./data.js";

const container = document.querySelector(".flex-container");
const pokeInput = document.getElementById("searchbar");
const searchBttn = document.getElementById("searchbutton");
const selectMenu = document.getElementById("selectmenu");
const filterMenu = document.getElementById("filtermenu");
const pokeDialog = document.getElementById("dialog-modal");
const closeBttn = document.createElement("i");
closeBttn.id = "close-button";
closeBttn.className = "fa fa-close close-button";

dataFunctions.showPokemon();

// ==== SEARCH ====
searchBttn.addEventListener("click", async (e) => {
  e.preventDefault();
  container.innerHTML = "";

  if (pokeInput.value === "") {
    const createMessage1 = document.createElement("div");
    createMessage1.id = "noinput";
    createMessage1.className = "messages";
    createMessage1.innerHTML +=
      "<h2>Please enter the name, number or type of your pokemon.</h2>";
    createMessage1.innerHTML += "<img src=./assets/img/happy-pikachu.webp>";
    container.insertAdjacentElement("beforeend", createMessage1);
    return;
  }

  const nameSearch = await dataFunctions.getPokeByName(
    pokeInput.value.toLowerCase()
  );
  const numberSearch = await dataFunctions.getPokeByNumber(pokeInput.value);
  const typeSearch = await dataFunctions.getPokeByType(
    pokeInput.value.toLowerCase()
  );

  if (
    nameSearch.length < 1 &&
    numberSearch.length < 1 &&
    typeSearch.length < 1
  ) {
    const createMessage2 = document.createElement("div");
    createMessage2.id = "notfoundmessage";
    createMessage2.className = "messages";
    createMessage2.innerHTML +=
      "<h2>We are sorry, we didn't find your pokemon.</h2>";
    createMessage2.innerHTML += "<img src=./assets/img/sad-pikachu.webp>";
    container.insertAdjacentElement("beforeend", createMessage2);
    return;
  }
  if (nameSearch.length >= 1) {
    dataFunctions.createPokebox(nameSearch);
    openPokeDialog();
    return;
  }
  if (numberSearch.length >= 1) {
    dataFunctions.createPokebox(numberSearch);
    openPokeDialog();
    return;
  }
  dataFunctions.createPokebox(typeSearch);
  openPokeDialog();
  return;
});

// ==== SORT BY ====

function sortMenu(e) {
  selectMenu.addEventListener("change", addActionToSort);
  e.preventDefault();
}

async function addActionToSort() {
  let pokeResult = [];
  switch (selectMenu.value) {
  case "az":
    {
      const sorted = orderListAZ();
      pokeResult = await dataFunctions.sortPokeByName(sorted);
    }
    break;
  case "za":
    {
      const sortedRev = orderListZA();
      pokeResult = await dataFunctions.sortPokeByName(sortedRev);
    }
    break;
  case "09":
    {
      const sortedNum = orderList09();
      pokeResult = await dataFunctions.sortPokeByNum(sortedNum);
    }
    break;
  case "90":
    {
      const sortedNumRev = orderList90();
      pokeResult = await dataFunctions.sortPokeByNum(sortedNumRev);
    }
    break;
  default:
  }
  container.innerHTML = "";
  dataFunctions.createPokebox(pokeResult);
  openPokeDialog();
}

function orderListAZ() {
  const liOnScreen = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < liOnScreen.length; i++) {
    sortedList.push(liOnScreen[i].innerText.slice(4).toLowerCase());
  }
  return sortedList.sort();
}

function orderListZA() {
  const onScreenList = document.querySelectorAll("li");
  const sortedList = [];
  for (let i = 0; i < onScreenList.length; i++) {
    sortedList.push(onScreenList[i].innerText.slice(4).toLowerCase());
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

// ==== FILTER BY TYPE ====

function filterSelect(e) {
  filterMenu.addEventListener("change", addActionToFilter);
  e.preventDefault();
}

async function addActionToFilter() {
  const type = filterMenu.value;
  const result = await dataFunctions.getPokeByType(type);
  container.innerHTML = "";
  dataFunctions.createPokebox(result);
  openPokeDialog();
}

// ==== DIALOG ====

function openPokeDialog() {
  const onScreen = document.querySelectorAll("li");
  onScreen.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
      showDialog();
      printPokeDetails(pokemon.innerText.slice(4).toLowerCase());
    });
  });
}

async function printPokeDetails(pokemon) {
  const data = await dataFunctions.getData();
  const stats = data.find((poke) => pokemon === poke.name);
  const types = stats.type;
  const resist = stats.resistant;
  const weak = stats.weaknesses;
  const quick = stats["quick-move"];
  const special = stats["special-attack"];
  const quickList = dataFunctions.showAttacks(quick);
  const specialList = dataFunctions.showAttacks(special);
  const evoResult = dataFunctions.joinEvolutions(stats);

  const pokeDialogUpperDiv = document.createElement("div");
  const pokeDialogMiddleDiv = document.createElement("div");
  const pokeDialogLowerDiv = document.createElement("div");
  const pokeDialogLowestDiv = document.createElement("div");
  pokeDialogUpperDiv.className = "dialog-div dialog-upper-div";
  pokeDialogMiddleDiv.className = "dialog-div";
  pokeDialogLowerDiv.className = "dialog-lower-div dialog-lower-div";
  pokeDialogLowestDiv.className = "dialog-div dialog-lowest-div";
  pokeDialogUpperDiv.innerHTML += `<h2>${
    stats.num
  }</h2><h2>${stats.name.toUpperCase()}</h2><h2 id="img-container">${dataFunctions.getTypeImgs(
    types
  )}</h2>`;
  pokeDialogMiddleDiv.innerHTML += `<img src= "${stats.img}" alt= "pokeImg${stats.name}" class="image poke-img">`;
  pokeDialogLowerDiv.innerHTML += `<h3><strong>Resistant to: </strong>${resist.map(type => dataFunctions.capFirstLetter(type)).join(
    ", "
  )}
  <h3><strong>Weakness: </strong>${weak.map(type => dataFunctions.capFirstLetter(type)).join(", ")}</h3>
  <h3><strong>Quick move: </strong>${quickList}</h3>
  <h3><strong>Special attack: </strong>${specialList}</h3>
  <h3><strong>Spawn chance </strong>${dataFunctions.evaluateCaptureRate(
    stats["spawn-chance"]
  )}<br><strong>Capture rate: </strong>${dataFunctions.evaluateCaptureRate(
  stats.encounter["base-capture-rate"]
)}<br><strong>Flee rate: </strong>${dataFunctions.evaluateCaptureRate(
  stats.encounter["base-flee-rate"]
)}</h3>`;
  pokeDialogLowestDiv.innerHTML += `<h3><strong>Evolutions: </strong>${evoResult}</h3>`;
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogUpperDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogMiddleDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowerDiv);
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowestDiv);
}

function showDialog() {
  pokeDialog.insertAdjacentElement("beforeend", closeBttn);
  pokeDialog.showModal();
  closePokeDialogButton();
}

function closePokeDialogButton() {
  const pokeDialogCloseBttn = document.getElementById("close-button");
  pokeDialogCloseBttn.addEventListener("click", () => closeDialog());
}

function closeDialog() {
  pokeDialog.close();
  pokeDialog.innerHTML = "";
}

window.addEventListener("load", openPokeDialog);
window.addEventListener("load", sortMenu);
window.addEventListener("load", filterSelect);
