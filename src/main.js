import dataFunctions from "./data.js"; //importando objeto que contiene funciones desde data.js
import data from "./data/pokemon/pokemon.js"; //importando data


dataFunctions.showPokemon(); //ejecutando función para mostrar pokemones

const pokeContainer = document.querySelector(".flex-container"); //seleccionando contenedor flex para pokemones
const pokeInput = document.getElementById("searchbar"); //seleccionando barra búsqueda
const searchBttn = document.getElementById("searchbutton"); //seleccionando botón búqueda
const selectMenu = document.getElementById("selectmenu");//seleccionando menú para ordenar
/*const pokeDialog = document.querySelector("dialog");
const pokeBoxesOnScreen = document.querySelectorAll("li")*/

searchBttn.addEventListener("click", (e) => { //agregando event listener al botón búsqueda
  e.preventDefault(); //evitando que se cargue de nuevo automáticamente
  const searchNameResult = dataFunctions.searchName(
    pokeInput.value.toLowerCase()
  ); //declarando variable que guarda nombre ya filtrado según el input ingresado
  const searchNumberResult = dataFunctions.searchNumber(pokeInput.value);//declarando variable que guarda el número ya filtrado según el input ingresado
  const searchTypeResult = dataFunctions.searchType(
    pokeInput.value.toLowerCase()
  );//declarando variable que guarda tipo ya filtrado según el input ingresado
  pokeContainer.innerHTML = ""; //vaciando el contenedor flex
  if (pokeInput.value === "") { //creando condicional en caso de un input vacío
    const createMessage1 = document.createElement("div"); //creando <div> para agregar el mensaje
    createMessage1.id = "noinput"; //asignando un id al div
    createMessage1.className = "messages"; //asignando una clase al div
    createMessage1.innerHTML += 
      "<h2> Por favor, ingresa el nombre, número o tipo de Pokemon para buscar.</h2>"; //agregando el mensaje como h2 al div
    createMessage1.innerHTML += "<img src=./img/HappyPikachu.png>"; //agregando imagen al div
    pokeContainer.insertAdjacentElement("beforeend", createMessage1);//insertando el div con todo el contenido agregado dentro de contenedor flex
  } else if ( //creando condicional en caso de búsqueda sin resultados
    searchNameResult.toString() === "" && //creando condición de nombre sin resultado
    searchNumberResult.toString() === "" && //agregando condición de número sin resultado
    searchTypeResult.toString() === "" //agregando condición de tipo sin resultado
  ) {
    const createMessage2 = document.createElement("div"); //creando div para agregar el mensaje
    createMessage2.id = "notfoundmessage"; //aisgnando un id al div
    createMessage2.className = "messages"; //asignado una clase al div
    createMessage2.innerHTML +=
      "<h2> Lo sentimos, tu búsqueda no ha dado resultados.</h2>"; //agregando el mensaje como h2 al div
    createMessage2.innerHTML += "<img src=./img/SadPikachu.png>"; //agregando imagen al div
    pokeContainer.insertAdjacentElement("beforeend", createMessage2); //insertando el div con todo el contenido agregado dentro de contenedor flex
  } else { //procesando resultados de búsqueda para mostrar en contenedor
    for (let i = 0; i < searchNameResult.length; i++) { //iterando por cada nombre en resultados para crear tarjetas
      const createPokebox = document.createElement("li");//creando <li> para cada pokemon
      const pokeName = searchNameResult[i].name;//almacenando nombre de cada pokemon
      const pokeNum = searchNameResult[i].num;//almacenando número de cada pokemon
      createPokebox.className = "pokeLi";//asignando clase a cada li
      createPokebox.id = "pokeLi" + [i];//asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString();//agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchNameResult[i].img}" alt= "pokeImg${searchNameResult[i].name}" class="image" id="${searchNameResult[i].id}">`;//agregando imagen a cada li
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase();//agregando nombre de pokemon a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);//insertando cada li dentro de contenedor flex
    }
    for (let i = 0; i < searchNumberResult.length; i++) { //iterando por cada número en resultados para crear tarjetas
      const createPokebox = document.createElement("li");//creando li para cada pokemon
      const pokeName = searchNumberResult[i].name;//almacenando nombre de cada pokemon
      const pokeNum = searchNumberResult[i].num;//almacenando número de cada pokemon
      createPokebox.className = "pokeLi";//asignando clase a cada li
      createPokebox.id = "pokeLi" + [i];//asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString();//agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchNumberResult[i].img}" alt= "pokeImg${searchNumberResult[i].name}" class="image" id="${searchNumberResult[i].id}">`;//agregando imagen a cada li
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase();//agregando nombre de pokemon a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);//insertando cada li dentro de contenedor flex
    }
    for (let i = 0; i < searchTypeResult.length; i++) { //iterando por cada tipo en resultados para crear tarjetas
      const createPokebox = document.createElement("li");//creando li para cada pokemon
      const pokeName = searchTypeResult[i].name;//almacenando nombre de cada pokemon
      const pokeNum = searchTypeResult[i].num;//almacenando número de cada pokemon
      createPokebox.className = "pokeLi";//asignando clase a cada li
      createPokebox.id = "pokeLi" + [i];//asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString();//agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchTypeResult[i].img}" alt= "pokeImg${searchTypeResult[i].name}" class="image" id="${searchTypeResult[i].id}">`;
      createPokebox.innerHTML += "<br>";//agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase();//agregando imagen a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);//insertando cada li dentro de contenedor flex
    }
  }
});

function select(e) { //creando función select
  selectMenu.addEventListener("change", addActionToSelect, false); //agregando event listener a menú select, cuando cambia ejecuta addActionToSelect
  e.preventDefault();//evitando que se cargue de nuevo automáticamente
}
function addActionToSelect() {//creando función addActionToSelect
  switch (selectMenu.value) {//creando switch case, para cada valor del menú select
  case "az": //declarando primer caso de switch
    {
      const sorted = orderListAZ(); //asignando a una variable la lista de li en pantalla ordenados de la A a la Z
      const pokeResult = []; //creando un array vacío como resultado
      sorted.forEach((pokemon) => { //declarando qué hacer por cada uno de los li ordenados de la A a la Z
        pokeResult.push( //indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find( //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.name//entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad name igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);//creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
    }
    break;//terminando primer caso
  case "za": //declarando segundo caso de switch
    {
      const sortedRev = orderListZA(); //asignando a una variable la lista de li en pantalla ordenados de la Z a la A
      const pokeResult = []; //creando un array vacío como resultado
      sortedRev.forEach((pokemon) => {//declarando qué hacer por cada uno de los li ordenados de la Z a la A
        pokeResult.push(//indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find( //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.name//entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad name igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);//creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
    }
    break;//terminando segundo caso
  case "09": //declarando tercer caso de switch
    {
      const sortedNum = orderList09();//asignando a una variable la lista de li en pantalla ordenados numéricamente
      const pokeResult = []; //creando un array vacío como resultado
      sortedNum.forEach((pokemon) => {//declarando qué hacer por cada uno de los li ordenados numéricamente
        pokeResult.push(//indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(//buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.num//entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad num igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);//creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
    }
    break;//terminando tercer caso
  case "90": //declarando cuarto caso de switch
    {
      const sortedNumRev = orderList90();//asignando a una variable la lista de li en pantalla ordenados numéricamente de forma descendente
      const pokeResult = []; //creando un array vacío como resultado
      sortedNumRev.forEach((pokemon) => {//declarando qué hacer por cada uno de los li ordenados numéricamente de forma descendente
        pokeResult.push(//indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(//buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.num//entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad num igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult);//creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
    }
    break;//terminando cuarto caso
  default: //declarando caso default vacío, aunque no es mandatorio
  }
}

function orderListAZ() {//declarando función para ordenar de la A a la Z
  const onScreenList = document.querySelectorAll("li"); //seleccionando todos los li en pantalla
  const sortedList = []; //creando array vacío para almacenar resultado
  for (let i = 0; i < onScreenList.length; i++) { //iterando la lista de li en pantalla
    sortedList.push(onScreenList[i].innerText.slice(5).toLowerCase());//agregando el texto del nombre en cada li al array resultado
  }
  return sortedList.sort();//ordenar y retornar de la A a la Z el array de resultados
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

const checkboxes = document.querySelectorAll('.dropdown-option');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      const value = event.target.value;
      console.log (value)
      const checkedType = dataFunctions.checkFilter(value);
      console.log (checkedType)
      return checkedType
    }
  });
});

/*function createPokeDialog (e) {
  e.preventDefault();
  const pokeDialogs = []
  pokeBoxesOnScreen.forEach ((pokebox) => {
    pokebox.innerHTML = `<dialog>pokebox</dialog>`
    pokeDialogs.push(pokebox);
  });
  pokeDialogs.forEach((pokemon) => {
    pokemon.addEventListener("click", openModal, false)
  });
  console.log ("ejecutando función")
}
Mostrando dialog modal
const dialogs = document.querySelectorAll("dialog")



pokeDialogsOnScreen.addEventListener("click", e => {
function openModal() {
  e.preventDefault();
    pokeDialogsOnScreen.forEach ((dialog) => {
      dialog.showModal()
    });
  });
}

pokeDialogsOnScreen.addEventListener("click", e => {
  const dialogDimensions = dialogs.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialogs.close()
  }
});

window.addEventListener("load", createPokeDialog, false);*/

window.addEventListener("load", select, false);