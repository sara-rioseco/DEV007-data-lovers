//=========IMPORTANDO DATA Y FUNCIONES DESDE DATA.JS Y POKEMON.JS===========
import dataFunctions from "./data.js"; //importando objeto que contiene funciones desde data.js
import data from "./data/pokemon/pokemon.js"; //importando data

//====================VARIABLES DE USO GENERAL======================
const pokeContainer = document.querySelector(".flex-container"); //seleccionando contenedor flex para pokemones
const pokeInput = document.getElementById("searchbar"); //seleccionando barra búsqueda
const searchBttn = document.getElementById("searchbutton"); //seleccionando botón búqueda
const selectMenu = document.getElementById("selectmenu"); //seleccionando menú para ordenar
const pokeDialog = document.getElementById("dialog-modal");
const closeBttn = document.createElement("button");
closeBttn.id = "close-button";
closeBttn.className = "close-button";
closeBttn.innerHTML = "Cerrar";

//====================FUNCIÓN PARA MOSTRAR DATA=============================
dataFunctions.showPokemon(); //ejecutando función para mostrar pokemones

//====================FUNCIONES PARA BUSCAR EN LA DATA======================
searchBttn.addEventListener("click", (e) => {
  //agregando event listener al botón búsqueda
  e.preventDefault(); //evitando que se cargue de nuevo automáticamente
  const searchNameResult = dataFunctions.searchName(
    pokeInput.value.toLowerCase()
  ); //declarando variable que guarda nombre ya filtrado según el input ingresado
  const searchNumberResult = dataFunctions.searchNumber(pokeInput.value); //declarando variable que guarda el número ya filtrado según el input ingresado
  const searchTypeResult = dataFunctions.searchType(
    pokeInput.value.toLowerCase()
  ); //declarando variable que guarda tipo ya filtrado según el input ingresado
  pokeContainer.innerHTML = ""; //vaciando el contenedor flex
  if (pokeInput.value === "") {
    //creando condicional en caso de un input vacío
    const createMessage1 = document.createElement("div"); //creando <div> para agregar el mensaje
    createMessage1.id = "noinput"; //asignando un id al div
    createMessage1.className = "messages"; //asignando una clase al div
    createMessage1.innerHTML +=
      "<h2> Por favor, ingresa el nombre, número o tipo de Pokemon para buscar.</h2>"; //agregando el mensaje como h2 al div
    createMessage1.innerHTML += "<img src=./img/HappyPikachu.png>"; //agregando imagen al div
    pokeContainer.insertAdjacentElement("beforeend", createMessage1); //insertando el div con todo el contenido agregado dentro de contenedor flex
  } else if (
    //creando condicional en caso de búsqueda sin resultados
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
  } else {
    //procesando resultados de búsqueda para mostrar en contenedor
    for (let i = 0; i < searchNameResult.length; i++) {
      //iterando por cada nombre en resultados para crear tarjetas
      const createPokebox = document.createElement("li"); //creando <li> para cada pokemon
      const pokeName = searchNameResult[i].name; //almacenando nombre de cada pokemon
      const pokeNum = searchNameResult[i].num; //almacenando número de cada pokemon
      createPokebox.className = "pokeLi"; //asignando clase a cada li
      createPokebox.id = "pokeLi" + [i]; //asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString(); //agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchNameResult[i].img}" alt= "pokeImg${searchNameResult[i].name}" class="image" id="${searchNameResult[i].id}">`; //agregando imagen a cada li
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase(); //agregando nombre de pokemon a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox); //insertando cada li dentro de contenedor flex
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    for (let i = 0; i < searchNumberResult.length; i++) {
      //iterando por cada número en resultados para crear tarjetas
      const createPokebox = document.createElement("li"); //creando li para cada pokemon
      const pokeName = searchNumberResult[i].name; //almacenando nombre de cada pokemon
      const pokeNum = searchNumberResult[i].num; //almacenando número de cada pokemon
      createPokebox.className = "pokeLi"; //asignando clase a cada li
      createPokebox.id = "pokeLi" + [i]; //asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString(); //agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchNumberResult[i].img}" alt= "pokeImg${searchNumberResult[i].name}" class="image" id="${searchNumberResult[i].id}">`; //agregando imagen a cada li
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase(); //agregando nombre de pokemon a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox); //insertando cada li dentro de contenedor flex
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    for (let i = 0; i < searchTypeResult.length; i++) {
      //iterando por cada tipo en resultados para crear tarjetas
      const createPokebox = document.createElement("li"); //creando li para cada pokemon
      const pokeName = searchTypeResult[i].name; //almacenando nombre de cada pokemon
      const pokeNum = searchTypeResult[i].num; //almacenando número de cada pokemon
      createPokebox.className = "pokeLi"; //asignando clase a cada li
      createPokebox.id = "pokeLi" + [i]; //asignando id a cada li
      createPokebox.innerHTML += pokeNum.toString(); //agregando número de pokemon a cada li
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += `<img src= "${searchTypeResult[i].img}" alt= "pokeImg${searchTypeResult[i].name}" class="image" id="${searchTypeResult[i].id}">`;
      createPokebox.innerHTML += "<br>"; //agregando línea vacía a cada li
      createPokebox.innerHTML += pokeName.toUpperCase(); //agregando imagen a cada li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox); //insertando cada li dentro de contenedor flex
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
  }
});
//====================FUNCIONES PARA ORDENAR DATA======================
function select(e) {
  //creando función select
  selectMenu.addEventListener("change", addActionToSelect, false); //agregando event listener a menú select, cuando cambia ejecuta addActionToSelect
  e.preventDefault(); //evitando que se cargue de nuevo automáticamente
}
function addActionToSelect() {
  //creando función addActionToSelect
  switch (
    selectMenu.value //creando switch case, para cada valor del menú select
  ) {
  case "az": //declarando primer caso de switch
    {
      const sorted = orderListAZ(); //asignando a una variable la lista de li en pantalla ordenados de la A a la Z
      const pokeResult = []; //creando un array vacío como resultado
      sorted.forEach((pokemon) => {
        //declarando qué hacer por cada uno de los li ordenados de la A a la Z
        pokeResult.push(
          //indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(
            //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.name //entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad name igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult); //creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    break; //terminando primer caso
  case "za": //declarando segundo caso de switch
    {
      const sortedRev = orderListZA(); //asignando a una variable la lista de li en pantalla ordenados de la Z a la A
      const pokeResult = []; //creando un array vacío como resultado
      sortedRev.forEach((pokemon) => {
        //declarando qué hacer por cada uno de los li ordenados de la Z a la A
        pokeResult.push(
          //indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(
            //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.name //entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad name igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult); //creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    break; //terminando segundo caso
  case "09": //declarando tercer caso de switch
    {
      const sortedNum = orderList09(); //asignando a una variable la lista de li en pantalla ordenados numéricamente
      const pokeResult = []; //creando un array vacío como resultado
      sortedNum.forEach((pokemon) => {
        //declarando qué hacer por cada uno de los li ordenados numéricamente
        pokeResult.push(
          //indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(
            //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.num //entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad num igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult); //creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    break; //terminando tercer caso
  case "90": //declarando cuarto caso de switch
    {
      const sortedNumRev = orderList90(); //asignando a una variable la lista de li en pantalla ordenados numéricamente de forma descendente
      const pokeResult = []; //creando un array vacío como resultado
      sortedNumRev.forEach((pokemon) => {
        //declarando qué hacer por cada uno de los li ordenados numéricamente de forma descendente
        pokeResult.push(
          //indicando que se debe agregar el elemento soguiente al final del array pokeResult
          data.pokemon.find(
            //buscando dentro de la data desde archivo pokemon.js
            (pokemonArrData) => pokemon === pokemonArrData.num //entregando cada pokemon que coincida con cualquier elemento dentro de la data con una propiedad num igual
          )
        );
      });
      dataFunctions.createPokebox(pokeResult); //creando cada tarjeta para mostrar en pantalla de cada pokemon dentro del resultado
      openPokeDialog(); //llamando función para abrir elemento dialog
    }
    break; //terminando cuarto caso
  default: //declarando caso default vacío, aunque no es mandatorio
  }
}

function orderListAZ() {
  //declarando función para ordenar de la A a la Z
  const onScreenList = document.querySelectorAll("li"); //seleccionando todos los li en pantalla
  const sortedList = []; //creando array vacío para almacenar resultado
  for (let i = 0; i < onScreenList.length; i++) {
    //iterando la lista de li en pantalla
    sortedList.push(onScreenList[i].innerText.slice(5).toLowerCase()); //agregando el texto del nombre en cada li al array resultado
  }
  return sortedList.sort(); //ordenar y retornar de la A a la Z el array de resultados
}

function orderListZA() {
  //declarando función para ordenar de la Z a la A
  const onScreenList = document.querySelectorAll("li"); //seleccionando todos los li en pantalla
  const sortedList = []; //creando array vacío para almacenar resultado
  for (let i = 0; i < onScreenList.length; i++) {
    //iterando la lista de li en pantalla
    sortedList.push(onScreenList[i].innerText.slice(5).toLowerCase()); //agregando el texto del nombre en cada li al array resultado
  }
  return sortedList.sort().reverse(); //ordenar de la A a la Z, invertir el orden y retornar el array de resultados
}

function orderList09() {
  //declarando función para ordenar numéricamente
  const onScreenList = document.querySelectorAll("li"); //seleccionando todos los li en pantalla
  const sortedList = []; //creando array vacío para almacenar resultado
  for (let i = 0; i < onScreenList.length; i++) {
    //iterando la lista de li en pantalla
    sortedList.push(onScreenList[i].innerText.slice(0, 3)); //agregando el texto del número en cada li al array resultado
  }
  return sortedList.sort(); //ordenar y retornar el array de resultados ordenado numéricamente
}

function orderList90() {
  //declarando función para ordenar numéricamente de forma descendente
  const onScreenList = document.querySelectorAll("li"); //seleccionando todos los li en pantalla
  const sortedList = []; //creando array vacío para almacenar resultado
  for (let i = 0; i < onScreenList.length; i++) {
    //iterando la lista de li en pantalla
    sortedList.push(onScreenList[i].innerText.slice(0, 3)); //agregando el texto del número en cada li al array resultado
  }
  return sortedList.sort().reverse(); //ordenar el array de resultados ordenado numéricamente, reverir el orden y retornar el resultado
}

window.addEventListener("load", select); //ejecutando función select al cargar la página

//====================FUNCIONES PARA MOSTRAR DIALOG======================
function openPokeDialog() { //declarando función para abrir elemento dialog
  const pokeLiOnScreen = document.querySelectorAll("li"); //seleccionando cada elemento li en pantalla
  pokeLiOnScreen.forEach((pokemon) => { //recorriendo por cada pokemon dentro de la lista de li
    pokemon.addEventListener("click", () => { //agregando event listener para que al hacer click ejecute lo siguiente
      showDialog(); //ejecutando función showDialog para mostrar elemento dialog
      printPokeDetails((pokemon.innerText.slice(5).toLowerCase())); //mostrando dentro del elemento dialog información del pokemon al que se le hizo click

    });
  });
}

function printPokeDetails(pokemon) { //declarando función para agregarr detalles del nombre del pokemon que recibe como parámetro
  const pokeData = data.pokemon //declarando variable que almacena la data desde pokemon.js
  const pokeDialogUpperDiv = document.createElement("div"); //creando div superior que irá dentro del dialog
  const pokeDialogMiddleDiv = document.createElement("div"); //creando div intermedio que irá dentro del dialog
  const pokeDialogLowerDiv = document.createElement("div"); //creando div inferior que irá dentro del dialog 
  const pokeDialogLowestDiv = document.createElement("div"); //creando div adicional que irá dentro del dialog
  const pokeDetails = pokeData.find((poke) => pokemon === poke.name); //buscando dentro de la data el nombre del pokemon que coincide con el ingresado
  const pokeTypes = pokeDetails.type
  const pokeImgSrcArr = createImgSrcArr(pokeTypes)
  const createTypeImg = createImg(pokeImgSrcArr)
  const pokeResistant = pokeDetails.resistant
  const pokeWeakness = pokeDetails.weaknesses
  const pokeResistantTranslated = translateType(pokeResistant)
  const pokeWeaknessTranslated = translateType(pokeWeakness)
  const pokeAttackQuick = pokeDetails["quick-move"]
  const pokeAttackSpecial = pokeDetails["special-attack"]
  const pokeAttackQuickList = showAttacks(pokeAttackQuick)
  const pokeAttackSpecialList = showAttacks(pokeAttackSpecial)
  const pokeEvolutionsResult = joinEvolutions(pokeDetails)
  pokeDialogUpperDiv.className = "dialog-div" //agregando el atributo clase al div superior
  pokeDialogUpperDiv.id = "dialog-upper-div" //agregando el atributo id al div superior
  pokeDialogMiddleDiv.className = "dialog-div" //agregando el atributo clase al div intermedio
  pokeDialogLowerDiv.className = "dialog-lower-div" //agregando el atributo clase al div inferior
  pokeDialogLowerDiv.id = "dialog-lower-div" //agregando el atributo id al div inferior
  pokeDialogLowestDiv.className = "dialog-div" //agregando el atributo clase al div adicional
  pokeDialogLowestDiv.id = "dialog-lowest-div" //agregando el atributo id al div adicional
  pokeDialogUpperDiv.innerHTML += `<h2>${pokeDetails.num}</h2><h2>${pokeDetails.name.toUpperCase()}</h2><h2 id="img-container">${createTypeImg}</h2>`; //agregando el número, nombre y tipo de pokemon al div superior
  pokeDialogMiddleDiv.innerHTML += `<img src= "${pokeDetails.img}" alt= "pokeImg${pokeDetails.name}" class="image">`; //agregando imagen al div intermedio
  pokeDialogLowerDiv.innerHTML += `<h3> Resistente a: ${pokeResistantTranslated.join(", ")}<h3><h3>Débil frente a: ${pokeWeaknessTranslated.join(", ")}</h3><h3>Ataque(s) rápido(s): ${pokeAttackQuickList}</h3><h3>Ataque(s) cargado(s): ${pokeAttackSpecialList}</h3>`; //agregando otros detalles al div inferior
  pokeDialogLowestDiv.innerHTML += `<h3>Evoluciones: ${pokeEvolutionsResult}</h3>`
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogUpperDiv);//agregando el div superior al elemento dialog
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogMiddleDiv);//agregando el div intermedio al elemento dialog
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowerDiv);//agregando el div inferior al elemento dialog
  pokeDialog.insertAdjacentElement("beforeend", pokeDialogLowestDiv);//agregando el div inferior al elemento dialog
}

function showDialog() { //declarando función para mostrar elemento dialog
  pokeDialog.insertAdjacentElement("beforeend", closeBttn);//agregando botón de cerrar al elemento dialog
  pokeDialog.showModal();//abre elemento dialog como ventana modal
  closePokeDialog();//ejecuta función para cerrar dialog al presionar el botón cerrar
}

function closePokeDialog () { //declarando función para dar acción al botón cerrar
  const pokeDialogCloseBttn = document.getElementById("close-button") //almacenando botón cerrar en una variable
  pokeDialogCloseBttn.addEventListener("click", () => closeDialog());//agregando event listener para que ejecute función closeDialog al hacer click en botón cerrar
}

function closeDialog() { //declarando función para cerrar el elemento dialog
  pokeDialog.close();//cerrando elemento dialog
  pokeDialog.innerHTML = "" //vaciando contenedor para que cuando se vuelva a abrir solo muestre la nueva data
}

window.addEventListener("load", openPokeDialog()); //ejecutando función openPokeDialog al cargar la página

//==================FUNCIONES PARA TRADUCIR TIPOS DE POKEMON=====================

function translateType(typeArr) {
  const translatedTypeArr = []
  for (let i = 0; i<typeArr.length; i++)
    if (typeArr[i] === "steel") {
      translatedTypeArr.push("acero")
    } else if (typeArr[i] === "water") {
      translatedTypeArr.push("agua")
    } else if (typeArr[i] === "bug") {
      translatedTypeArr.push("bicho")
    } else if (typeArr[i] === "dragon") {
      translatedTypeArr.push("dragón")
    } else if (typeArr[i] === "electric") {
      translatedTypeArr.push("eléctrico")
    } else if (typeArr[i] === "ghost") {
      translatedTypeArr.push("fantasma")
    } else if (typeArr[i] === "fire") {
      translatedTypeArr.push("fuego")
    } else if (typeArr[i] === "fairy") {
      translatedTypeArr.push("hada")
    } else if (typeArr[i] === "poison") {
      translatedTypeArr.push("veneno")
    } else if (typeArr[i] === "grass") {
      translatedTypeArr.push("hierba")
    } else if (typeArr[i] === "psychic") {
      translatedTypeArr.push("psíquico")
    } else if (typeArr[i] === "flying") {
      translatedTypeArr.push("volador")
    } else if (typeArr[i] === "dark") {
      translatedTypeArr.push("siniestro")
    } else if (typeArr[i] === "rock") {
      translatedTypeArr.push("roca")
    } else if (typeArr[i] === "ground") {
      translatedTypeArr.push("tierra")
    } else if (typeArr[i] === "normal") {
      translatedTypeArr.push("normal")
    } else if (typeArr[i] === "ice") {
      translatedTypeArr.push("hielo")
    } else if (typeArr[i] === "fighting") {
      translatedTypeArr.push("lucha")
    } 
  return translatedTypeArr;
}

//==================FUNCIONES PARA MOSTRAR IMAGEN DE TIPOS DE POKEMON=====================
function createImgSrcArr(typeArr) {
  const imgSrcArr = []
  for (let i = 0; i < typeArr.length; i++) {
    if (typeArr[i] === "steel") {
      const imgSrcSteel = "./img/pokemon-types/tipo-acero.jpg"
      imgSrcArr.push(imgSrcSteel)
    } else if (typeArr[i] === "water") {
      const imgSrcWater = "./img/pokemon-types/tipo-agua.jpg"
      imgSrcArr.push(imgSrcWater)
    } else if (typeArr[i] === "bug") {
      const imgSrcBug = "./img/pokemon-types/tipo-bicho.jpg"
      imgSrcArr.push(imgSrcBug)
    } else if (typeArr[i] === "dragon") {
      const imgSrcDragon = "./img/pokemon-types/tipo-dragon.jpg"
      imgSrcArr.push(imgSrcDragon)
    } else if (typeArr[i] === "electric") {
      const imgSrcElectric = "./img/pokemon-types/tipo-electrico.jpg"
      imgSrcArr.push(imgSrcElectric)
    } else if (typeArr[i] === "ghost") {
      const imgSrcGhost = "./img/pokemon-types/tipo-fantasma.jpg"
      imgSrcArr.push(imgSrcGhost)
    } else if (typeArr[i] === "fire") {
      const imgSrcFire = "./img/pokemon-types/tipo-fuego.jpg"
      imgSrcArr.push(imgSrcFire)
    } else if (typeArr[i] === "fairy") {
      const imgSrcFairy = "./img/pokemon-types/tipo-hada.jpg"
      imgSrcArr.push(imgSrcFairy)
    } else if (typeArr[i] === "poison") {
      const imgSrcPoison = "./img/pokemon-types/tipo-veneno.jpg"
      imgSrcArr.push(imgSrcPoison)
    } else if (typeArr[i] === "grass") {
      const imgSrcGrass = "./img/pokemon-types/tipo-planta.jpg"
      imgSrcArr.push(imgSrcGrass)
    } else if (typeArr[i] === "psychic") {
      const imgSrcPsychic = "./img/pokemon-types/tipo-psiquico.jpg"
      imgSrcArr.push(imgSrcPsychic)
    } else if (typeArr[i] === "flying") {
      const imgSrcFlying = "./img/pokemon-types/tipo-volador.jpg"
      imgSrcArr.push(imgSrcFlying)
    } else if (typeArr[i] === "dark") {
      const imgSrcDark = "./img/pokemon-types/tipo-siniestro.jpg"
      imgSrcArr.push(imgSrcDark)
    } else if (typeArr[i] === "rock") {
      const imgSrcRock = "./img/pokemon-types/tipo-roca.jpg"
      imgSrcArr.push(imgSrcRock)
    } else if (typeArr[i] === "ground") {
      const imgSrcGround = "./img/pokemon-types/tipo-tierra.jpg"
      imgSrcArr.push(imgSrcGround)
    } else if (typeArr[i] === "normal") {
      const imgSrcNormal = "./img/pokemon-types/tipo-normal.jpg"
      imgSrcArr.push(imgSrcNormal)
    } else if (typeArr[i] === "ice") {
      const imgSrcIce = "./img/pokemon-types/tipo-hielo.jpg"
      imgSrcArr.push(imgSrcIce)
    } else if (typeArr[i] === "fighting") {
      const imgSrcFighting = "./img/pokemon-types/tipo-lucha.jpg"
      imgSrcArr.push(imgSrcFighting)
    } 
  } return imgSrcArr;
}

function createImg(imgSrcArr) {
  if (imgSrcArr.length === 1) {
    return '<img src="' + imgSrcArr[0] + '" alt= "tipo de pokemon" class="image">';
  } else {
    return '<img src="' + imgSrcArr[0] + '" alt= "tipo de pokemon" class="image">' + '<img src="' + imgSrcArr[1] + '" alt= "tipo de pokemon" class="image">'
  }
}

//==============FUNCIONES PARA MOSTRAR LOS ATAQUES RAPIDOS Y CARGADOS==============
function showAttacks(attacksArr) {
  if (attacksArr.length === 1) {
    return attacksArr[0].name
  } else if (attacksArr.length === 2) {
    return attacksArr[0].name + ', ' + attacksArr[1].name
  } else {
    return attacksArr[0].name + ', ' + attacksArr[1].name + ', ' + attacksArr[2].name
  }
}

//=======================FUNCIONES PARA MOSTRAR LAS EVOLUCIONES=====================
function listPrevEvolutions (Obj) {
  const prevEvo = []
  if (Obj.evolution['prev-evolution'] !== undefined) {
    if (Obj.evolution['prev-evolution'][0]['prev-evolution'] !== undefined) {
      prevEvo.push(Obj.evolution['prev-evolution'][0]['prev-evolution'][0].name);
      prevEvo.push(Obj.evolution['prev-evolution'][0].name);
      return prevEvo
    } else {
      prevEvo.push(Obj.evolution['prev-evolution'][0].name);
      return prevEvo
    }
  } 
}
 
function listNextEvolutions (Obj) {
  const nextEvo = []
  if (Obj.evolution['next-evolution'] !== undefined) {
    if (Obj.evolution['next-evolution'][0]['next-evolution'] !== undefined) {
      nextEvo.push(Obj.evolution['next-evolution'][0].name);
      nextEvo.push(Obj.evolution['next-evolution'][0]['next-evolution'][0].name);
      return nextEvo
    } else {
      nextEvo.push(Obj.evolution['next-evolution'][0].name);
      return nextEvo
    }
  }
}

function joinEvolutions (pokemon) {
  const result = []
  const prevEvolutions = listPrevEvolutions(pokemon)
  const nextEvolutions = listNextEvolutions(pokemon)
  const currentEvolution = pokemon.name
  if (prevEvolutions === undefined) {
    result.push(currentEvolution, nextEvolutions)
  } else if ( nextEvolutions === undefined) {
    result.push(prevEvolutions, currentEvolution)
  } else {
    result.push(prevEvolutions, currentEvolution, nextEvolutions)
  }
  return result.flat(1).join(' -> ');  
}