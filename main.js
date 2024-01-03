import dataFunctions from "./data.js";
// import Chart from 'chart.js/auto';

const container = document.querySelector(".grid-container");
const input = document.getElementById("searchbar");
const searchBttn = document.getElementById("searchbutton");
const selectMenu = document.getElementById("selectmenu");
const filterMenu = document.getElementById("filtermenu");
const dialog = document.getElementById("dialog-modal");
const closeBttn = document.createElement("i");
closeBttn.id = "close-button";
closeBttn.className = "fa fa-close close-button";

showPokemon()
  .then(() => addShowDialogEvent());


function createPokebox (data) {
  data.forEach(item => container.appendChild(dataFunctions.createCard(item)));
}

async function showPokemon() {
  try {
    const data = await dataFunctions.getData();
    createPokebox(data);
  } catch (e) {
    throw new Error(e);
  }
}

// ========= SEARCH BAR =========

searchBttn.addEventListener("click", async (e) => {
  e.preventDefault();
  container.innerHTML = "";

  if (input.value === "") {
    const noInput = document.createElement("div");
    noInput.classList = "messages no-result-msg";

    const text = document.createElement("h2");
    text.innerText = "Please enter the name, number or type of your pokemon."

    const img = document.createElement("img");
    img.src = "./assets/img/happy-pikachu.webp"
    img.alt = "happy pikachu"

    noInput.appendChild(text);
    noInput.appendChild(img);
    container.insertAdjacentElement("beforeend", noInput);
    return;
  }

  const nameSearch = await dataFunctions.getPokeByName(input.value.toLowerCase());
  const numberSearch = await dataFunctions.getPokeByNumber(input.value);
  const typeSearch = await dataFunctions.getPokeByType(input.value.toLowerCase());

  if (
    nameSearch.length < 1 &&
    numberSearch.length < 1 &&
    typeSearch.length < 1
  ) {
    const notFound = document.createElement("div");
    notFound.classList = "messages no-result-msg";

    const text = document.createElement("h2");
    text.innerText = "We are sorry, we didn't find your pokemon."

    const img = document.createElement("img");
    img.src = "./assets/img/sad-pikachu.webp"
    img.alt = "sad pikachu"

    notFound.appendChild(text);
    notFound.appendChild(img);
    container.insertAdjacentElement("beforeend", notFound);
    return;
  }
  if (nameSearch.length >= 1) {
    createPokebox(nameSearch);
  }
  if (numberSearch.length >= 1) {
    createPokebox(numberSearch);
  }
  createPokebox(typeSearch);
  addShowDialogEvent();
  return;
});

// ========= SORT BY =========

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
  createPokebox(pokeResult);
  addShowDialogEvent();
}

function orderListAZ() {
  const cards = document.querySelectorAll("li");
  const res = [];
  for (let i = 0; i < cards.length; i++) {
    res.push(cards[i].innerText.slice(4).toLowerCase());
  }
  return res.sort();
}

function orderListZA() {
  const cards = document.querySelectorAll("li");
  const res = [];
  for (let i = 0; i < cards.length; i++) {
    res.push(cards[i].innerText.slice(4).toLowerCase());
  }
  return res.sort().reverse();
}

function orderList09() {
  const cards = document.querySelectorAll("li");
  const res = [];
  for (let i = 0; i < cards.length; i++) {
    res.push(cards[i].innerText.slice(0, 3));
  }
  return res.sort();
}

function orderList90() {
  const cards = document.querySelectorAll("li");
  const res = [];
  for (let i = 0; i < cards.length; i++) {
    res.push(cards[i].innerText.slice(0, 3));
  }
  return res.sort().reverse();
}

// ========= FILTER BY TYPE =========

function filterSelect(e) {
  filterMenu.addEventListener("change", addActionToFilter);
  e.preventDefault();
}

async function addActionToFilter() {
  const type = filterMenu.value;
  const result = await dataFunctions.getPokeByType(type);
  container.innerHTML = "";
  createPokebox(result);
  addShowDialogEvent();
}

// ========= DIALOG =========

async function printPokeDetails(pokemon) {
  const data = await dataFunctions.getData();
  const stats = data.find((poke) => pokemon === poke.name);
  const quickList = dataFunctions.showAttacks(stats["quick-move"]);
  const specialList = dataFunctions.showAttacks(stats["special-attack"]);
  const evoResult = dataFunctions.joinEvolutions(stats);
  const dialogUpperDiv = document.createElement("div");
  const dialogMiddleDiv = document.createElement("div");
  const dialogLowerDiv = document.createElement("div");
  const dialogLowestDiv = document.createElement("div");
  dialogUpperDiv.className = "dialog-div dialog-upper-div";
  dialogMiddleDiv.className = "dialog-div";
  dialogLowerDiv.className = "dialog-lower-div dialog-lower-div";
  dialogLowestDiv.className = "dialog-div dialog-lowest-div";
  dialogUpperDiv.innerHTML += `
    <h2>${stats.num}</h2>
    <h2>${stats.name.toUpperCase()}</h2>
    <h2 id="img-container">${dataFunctions.getTypeImgs(stats.type)}</h2>
  `;
  dialogMiddleDiv.innerHTML += `<img src= "${stats.img}" alt= "pokeImg${stats.name}" class="image poke-img">`;
  dialogLowerDiv.innerHTML += `<h3><strong>Resistant to: </strong>${stats.resistant.map(type => dataFunctions.capFirstLetter(type)).join(
    ", "
  )}
  <h3><strong>Weakness: </strong>${stats.weaknesses.map(type => dataFunctions.capFirstLetter(type)).join(", ")}</h3>
  <h3><strong>Quick move: </strong>${quickList}</h3>
  <h3><strong>Special attack: </strong>${specialList}</h3>
  <h3><strong>Spawn chance </strong>${dataFunctions.evaluateCaptureRate(
    stats["spawn-chance"]
  )}<br><strong>Capture rate: </strong>${dataFunctions.evaluateCaptureRate(
  stats.encounter["base-capture-rate"]
)}<br><strong>Flee rate: </strong>${dataFunctions.evaluateCaptureRate(
  stats.encounter["base-flee-rate"]
)}</h3>`;
  dialogLowestDiv.innerHTML += `<h3><strong>Evolutions: </strong>${evoResult}</h3>`;
  dialog.insertAdjacentElement("beforeend", dialogUpperDiv);
  dialog.insertAdjacentElement("beforeend", dialogMiddleDiv);
  dialog.insertAdjacentElement("beforeend", dialogLowerDiv);
  dialog.insertAdjacentElement("beforeend", dialogLowestDiv);
}

function addShowDialogEvent() {
  const cards = document.querySelectorAll("li");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      showDialog();
      printPokeDetails(card.innerText.slice(4).toLowerCase());
    });
  });
}

function showDialog() {
  dialog.insertAdjacentElement("beforeend", closeBttn);
  dialog.showModal();
  addCloseEvent();
}

function addCloseEvent() {
  const closeBttn = document.getElementById("close-button");
  closeBttn.addEventListener("click", () => closeDialog());
}

function closeDialog() {
  dialog.close();
  dialog.innerHTML = "";
}

window.addEventListener("load", sortMenu);
window.addEventListener("load", filterSelect);
