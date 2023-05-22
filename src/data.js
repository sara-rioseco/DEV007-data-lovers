//==============IMPORTANDO DATA DESDE ARCHIVO POKEMONS.JS=================
import data from "./data/pokemon/pokemon.js"; //importando data

//========================================================================
const dataFunctions = { //creando objeto dataFunctions para almacenar métodos
  showPokemon: function () { //creando método para mostrar pokemones en pantalla
    const pokeData = data.pokemon //almacenando la data en una variable
    this.createPokebox(pokeData);//ejecutar función para crear cada tarjeta de pokemon con la data
  },
  createPokebox: function (data) {//creando método para crear cada tarjeta de pokemon 
    const pokeContainer = document.querySelector(".flex-container");//seleccionando contenedor flex
    const pokeData = data //almacenando argumento en una variable
    pokeContainer.innerHTML = "" //vaciando contenedor flex
    for (let i = 0; i < pokeData.length; i++) {//iterando por cada elemento en data
      const createPokebox = document.createElement("li"); //creando un elemento li y asignándolo a una variable
      const pokeName = pokeData[i].name;//guardando en una variable la propiedad name de cada elemento
      const pokeNum = pokeData[i].num; //guardando en una variable la propiedad num de cada elemento
      createPokebox.className = "pokeLi"; //asignando el atributo class a cada elemento li
      createPokebox.id = pokeData[i].name; //asignando el atributo id a cada elemento li
      createPokebox.innerHTML += pokeNum.toString(); //agregando el número de cada pokemon al elemento li
      createPokebox.innerHTML += "<br>"; //agregando una línea al elemento li
      createPokebox.innerHTML += `<img src= "${pokeData[i].img}" alt= "pokeImg${pokeData[i].name}" class="image" id="${pokeData[i].id}">`; //agregando la imagen de cada pokemon al elemento li
      createPokebox.innerHTML += "<br>"; //agregando una línea al elemento li
      createPokebox.innerHTML += pokeName.toUpperCase(); //agregando el nombre en mayúscula de cada pokemon al elemento li
      pokeContainer.insertAdjacentElement("beforeend", createPokebox); //agregando cada elemento li con todo lo que contiene al contenedor flex
    }
  },
  searchName: function (input) { //declarando función para buscar por nombre usando un parámetro input
    return data.pokemon.filter((poke) => { //tomando los nombres retornados por la línea siguiente, filtrándolos en la data y retornándolos como objeto
      return poke.name.includes(input.toLowerCase());//retornando los nombres de pokemones que incluyen el input
    });
  },
  searchNumber: function (input) { //declarando función para buscar por número usando un parámetro input
    return data.pokemon.filter((poke) => {//tomando los números retornados por la línea siguiente, filtrándolos en la data y retornándolos como objeto
      return poke.num.includes(input);//retornando los números de pokemones que incluyen el input
    });
  },
  searchType: function (input) { //declarando función para buscar por tipo usando un parámetro input
    return data.pokemon.filter((poke) => { //tomando los tipos retornados por la línea siguiente, filtrándolos en la data y retornándolos como objeto
      return poke.type.includes(input);//retornando los tipos de pokemones que incluyen el input
    });
  },
  checkFilter: function (value) {
    return data.pokemon.filter(poke => poke.type === value);
  }
}

/*createTypeImg: function (typeArr) {
    let imgsrc = ""
    for (let i = 0; i < typeArr.length; i++) {
      if (typeArr[i] === "steel") {
        imgsrc = "./img/pokemon-types/tipo-acero.jpg"
        return imgsrc
      } else if (typeArr[i] === "water") {
        imgsrc = "./img/pokemon-types/tipo-agua.jpg"
        return imgsrc
      } else if (typeArr[i] === "bug") {
        imgsrc = "./img/pokemon-types/tipo-bicho.jpg"
        return imgsrc
      } else if (typeArr[i] === "dragon") {
        imgsrc = "./img/pokemon-types/tipo-dragon.jpg"
        return imgsrc
      } else if (typeArr[i] === "electric") {
        imgsrc = "./img/pokemon-types/tipo-electrico.jpg"
        return imgsrc
      } else if (typeArr[i] === "ghost") {
        imgsrc = "./img/pokemon-types/tipo-fantasma.jpg"
        return imgsrc
      } else if (typeArr[i] === "fire") {
        imgsrc = "./img/pokemon-types/tipo-fuego.jpg"
        return imgsrc
      } else if (typeArr[i] === "fairy") {
        imgsrc = "./img/pokemon-types/tipo-hada.jpg"
        return imgsrc
      } else if (typeArr[i] === "poison") {
        imgsrc = "./img/pokemon-types/tipo-veneno.jpg"
        return imgsrc
      } else if (typeArr[i] === "grass") {
        imgsrc = "./img/pokemon-types/tipo-planta.jpg"
        return imgsrc
      } else if (typeArr[i] === "psychic") {
        imgsrc = "./img/pokemon-types/tipo-psiquico.jpg"
        return imgsrc
      } else if (typeArr[i] === "flying") {
        imgsrc = "./img/pokemon-types/tipo-volador.jpg"
        return imgsrc
      } else if (typeArr[i] === "dark") {
        imgsrc = "./img/pokemon-types/tipo-siniestro.jpg"
        return imgsrc
      } else if (typeArr[i] === "rock") {
        imgsrc = "./img/pokemon-types/tipo-roca.jpg"
        return imgsrc
      } else if (typeArr[i] === "ground") {
        imgsrc = "./img/pokemon-types/tipo-tierra.jpg"
        return imgsrc
      } else if (typeArr[i] === "normal") {
        imgsrc = "./img/pokemon-types/tipo-normal.jpg"
        return imgsrc
      } else if (typeArr[i] === "ice") {
        imgsrc = "./img/pokemon-types/tipo-hielo.jpg"
        return imgsrc 
      } else if (typeArr[i] === "fighting") {
        imgsrc = "./img/pokemon-types/tipo-lucha.jpg"
        return imgsrc
      }
    }
  },*/
export default dataFunctions; //exportando objeto dataFunctions