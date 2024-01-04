import dataFunctions from "./data.js";
// import Chart from 'chart.js/auto';

const container = document.querySelector(".grid-container");
const input = document.getElementById("search-input");
const searchBttn = document.getElementById("search-button");
const sortSelect = document.getElementById("sort-select");
const typeSelect = document.getElementById("type-select");
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
  sortSelect.addEventListener("change", addActionToSort);
  e.preventDefault();
}

async function addActionToSort() {
  let pokeResult = [];
  switch (sortSelect.value) {
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
  typeSelect.addEventListener("change", addActionToFilter);
  e.preventDefault();
}

async function addActionToFilter() {
  const type = typeSelect.value;
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

  const number = document.createElement('h2');
  number.textContent = `${stats.num}`

  const name = document.createElement('h2');
  name.textContent = `${stats.name.toUpperCase()}`

  const types = document.createElement('div');
  types.id = 'img-container';
  types.innerHTML = `${dataFunctions.getTypeImgs(stats.type)}`;

  const image = document.createElement('img');
  image.src = `${stats.img}`
  image.alt = `Image of ${stats.name} pokemon`
  image.classList = 'image poke-img'

  const resist = document.createElement('h3');
  const resistB = document.createElement('b');
  resistB.textContent = 'Resistant to: '
  resist.textContent = `${stats.resistant.map(type => dataFunctions.capFirstLetter(type)).join(", ")}`
  resist.insertAdjacentElement('afterbegin', resistB)

  const weak = document.createElement('h3');
  const weakB = document.createElement('b');
  weakB.textContent = 'Weakness: '
  weak.textContent = `${stats.weaknesses.map(type => dataFunctions.capFirstLetter(type)).join(", ")}`
  weak.insertAdjacentElement('afterbegin', weakB)

  const quick = document.createElement('h3');
  const quickB = document.createElement('b');
  quickB.textContent = 'Quick move: '
  quick.textContent = `${quickList}`
  quick.insertAdjacentElement('afterbegin', quickB)

  const special = document.createElement('h3');
  const specialB = document.createElement('b')
  specialB.textContent = 'Special attack: '
  special.textContent = `${specialList}`
  special.insertAdjacentElement('afterbegin', specialB)

  const spawn = document.createElement('h3');
  const spawnB = document.createElement('b')
  spawnB.textContent = 'Spawn Chance'
  spawn.classList = 'break centered'
  spawn.textContent = `\r\n${dataFunctions.evaluateCaptureRate(stats["spawn-chance"])}`
  spawn.insertAdjacentElement('afterbegin', spawnB)

  const capture = document.createElement('h3');
  const captureB = document.createElement('b')
  captureB.textContent = 'Capture rate: '
  capture.classList = 'break centered'
  capture.textContent = `\r\n${dataFunctions.evaluateCaptureRate(stats.encounter["base-capture-rate"])}`
  capture.insertAdjacentElement('afterbegin', captureB)

  const flee = document.createElement('h3');
  const fleeB = document.createElement('b')
  fleeB.textContent = 'Flee rate: '
  flee.classList = 'break centered'
  flee.textContent = `\r\n${dataFunctions.evaluateCaptureRate(stats.encounter["base-flee-rate"])}`
  flee.insertAdjacentElement('afterbegin', fleeB)

  const evolutions = document.createElement('h3');
  const evolutionsB = document.createElement('b');
  evolutionsB.textContent = 'Evolutions: '
  evolutions.classList = 'break centered'
  evolutions.textContent = `\r\n${evoResult}`
  evolutions.insertAdjacentElement('afterbegin', evolutionsB)

  dialog.insertAdjacentElement('beforeend', number)
  dialog.insertAdjacentElement('beforeend', name)
  dialog.insertAdjacentElement('beforeend', types)
  dialog.insertAdjacentElement('beforeend', image)
  dialog.insertAdjacentElement('beforeend', resist)
  dialog.insertAdjacentElement('beforeend', weak)
  dialog.insertAdjacentElement('beforeend', quick)
  dialog.insertAdjacentElement('beforeend', special)
  dialog.insertAdjacentElement('beforeend', spawn)
  dialog.insertAdjacentElement('beforeend', capture)
  dialog.insertAdjacentElement('beforeend', flee)
  dialog.insertAdjacentElement('beforeend', evolutions)
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
  dialog.insertAdjacentElement("afterbegin", closeBttn);
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
