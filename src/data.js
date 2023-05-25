//==============IMPORTANDO DATA DESDE ARCHIVO POKEMONS.JS=================
import data from "./data/pokemon/pokemon.js"; //importando data

//======================FUNCIONES PARA MOSTRAR DATA====================
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
  //========================FUNCIONES PARA BUSCAR EN LA DATA================
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
  //================FUNCIONES PARA MANIPULAR DATOS DENTRO DE DIALOG==============
  checkFilter: function (value) { //Declarando función que tomará valor de parámetro de checkbox
    const pokemonesTypes = []; //Array vacío para recibir la data obtenida de la siguiente función
    data.pokemon.forEach(poke => { //forEach para comparar cada índice de array con el valor de value
      if (poke.type.includes(value)) { //método includes para incluir la data filtrada
        pokemonesTypes.push(poke); //poniendo data en el array con método push
      }
    });
    return pokemonesTypes; //retornando el resultado de arrays
  },

//====================FUNCIÓN PARA TRADUCIR TIPOS DE POKEMON===================
/*translateType: function (typeArr) {
    const translatedTypeArr = []
    for (let i = 0; i<typeArr.length; i++) {
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
    } return translatedTypeArr;
  },
  //=============FUNCIONES PARA MOSTRAR IMAGEN DE TIPOS DE POKEMON==============
  createImgSrcArr: function (typeArr) {
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
  },

  createImg: function (imgSrcArr) {
    if (imgSrcArr.length === 1) {
      return '<img src="' + imgSrcArr[0] + '" alt= "tipo de pokemon" class="image">';
    } else {
      return '<img src="' + imgSrcArr[0] + '" alt= "tipo de pokemon" class="image">' + '<img src="' + imgSrcArr[1] + '" alt= "tipo de pokemon" class="image">'
    }
  },

  //==============FUNCIÓN PARA MOSTRAR LOS ATAQUES RAPIDOS Y CARGADOS==============
  showAttacks: function (attacksArr) {
    if (attacksArr.length === 1) {
      return attacksArr[0].name
    } else if (attacksArr.length === 2) {
      return attacksArr[0].name + ', ' + attacksArr[1].name
    } else {
      return attacksArr[0].name + ', ' + attacksArr[1].name + ', ' + attacksArr[2].name
    }
  },

  //=======================FUNCIONES PARA MOSTRAR LAS EVOLUCIONES==================
  listPrevEvolutions: function (Obj) {
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
  },
 
  listNextEvolutions: function (Obj) {
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
  },

  joinEvolutions: function (pokemon) {
    const result = []
    const prevEvolutions = this.listPrevEvolutions(pokemon)
    const nextEvolutions = this.listNextEvolutions(pokemon)
    const currentEvolution = pokemon.name
    if (nextEvolutions === undefined && prevEvolutions === undefined) {
      result.push(currentEvolution)
    } else if (prevEvolutions === undefined) {
      result.push(currentEvolution, nextEvolutions)
    } else if (nextEvolutions === undefined) {
      result.push(prevEvolutions, currentEvolution)
    } else {
      result.push(prevEvolutions, currentEvolution, nextEvolutions)
    }
    return result.flat().join(' -> ');  
  },

  evaluateCaptureRate: function (data) {
    if (data === null) {
      return "Sin información"
    } else if (data === "not in capture") {
      return "No disponible para captura"
    } else if (data === "0") {
      return "Sin información"
    } else {
      return data
    }
  }
};*/
export default dataFunctions; //exportando objeto dataFunctions
