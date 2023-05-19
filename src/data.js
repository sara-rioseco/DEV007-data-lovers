import data from "./data/pokemon/pokemon.js";
const dataFunctions = { //creando objeto dataFunctions para almacenar funciones
  showPokemon: function () {
    const pokeData = data.pokemon
    this.createPokebox(pokeData);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    const pokeData = data
    pokeContainer.innerHTML = ""
    for (let i = 0; i < pokeData.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = pokeData[i].name;
      const pokeNum = pokeData[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = pokeData[i].name;
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${pokeData[i].img}" alt= "pokeImg${pokeData[i].name}" class="image" id="${pokeData[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
  },
  searchName: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.name.includes(input.toLowerCase());
    });
  },
  searchNumber: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.num.includes(input);
    });
  },
  checkType: function (checkfilter) {
    return data.pokemon.filter((poke) => {
      return poke.type(checkfilter);
    });
  },
  /*createDialog: function (pokename) {
    const pokeModalDialog = document.getElementById("modal-dialog");
    const createDiv = document.createElement("div");
    data.pokemon.forEach((pokemon) => {
      (data.pokemon.name).find(pokemon)
      if (pokename === pokemon.name) {
        createDiv.className = "modal-dialog-div"
        createDiv.innerHTML += "Soy el mismo pokemon!"
        pokeModalDialog.insertAdjacentElement("beforeend", createDiv);
      }
    });
  },

  createTypeImg: function (typeArr) {
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
};

const tipo = [];
data.pokemon.forEach((pokemones) => {
  tipo.push(pokemones.type);
});
console.log(tipo.flat(2));
const cons = tipo.flat(2);
for (let i = 0; i < cons.length; i++){
  const resultado = []
  if (cons[i] !== cons[i-1]){
    resultado.push(cons[i])
    console.log (resultado)
  }
} 
export default dataFunctions;
