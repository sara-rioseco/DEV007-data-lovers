import data from "./data/pokemon/pokemon.js";

const dataFunctions = {
  showPokemon: function () {
    const pokeData = data.pokemon;
    this.createPokebox(pokeData);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    const pokeData = data;
    pokeContainer.innerHTML = "";
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
  searchType: function (input) {
    return data.pokemon.filter((poke) => {
      return poke.type.includes(input);
    });
  },

  checkFilter: function (value) {
    const pokemonesTypes = [];
    data.pokemon.forEach((poke) => {
      if (poke.type.includes(value)) {
        pokemonesTypes.push(poke);
      }
    });
    return pokemonesTypes;
  },

  translateType: function (typeArr) {
    const translatedTypeArr = [];
    for (let i = 0; i < typeArr.length; i++) {
      if (typeArr[i] === "steel") {
        translatedTypeArr.push("acero");
      } else if (typeArr[i] === "water") {
        translatedTypeArr.push("agua");
      } else if (typeArr[i] === "bug") {
        translatedTypeArr.push("bicho");
      } else if (typeArr[i] === "dragon") {
        translatedTypeArr.push("dragón");
      } else if (typeArr[i] === "electric") {
        translatedTypeArr.push("eléctrico");
      } else if (typeArr[i] === "ghost") {
        translatedTypeArr.push("fantasma");
      } else if (typeArr[i] === "fire") {
        translatedTypeArr.push("fuego");
      } else if (typeArr[i] === "fairy") {
        translatedTypeArr.push("hada");
      } else if (typeArr[i] === "poison") {
        translatedTypeArr.push("veneno");
      } else if (typeArr[i] === "grass") {
        translatedTypeArr.push("hierba");
      } else if (typeArr[i] === "psychic") {
        translatedTypeArr.push("psíquico");
      } else if (typeArr[i] === "flying") {
        translatedTypeArr.push("volador");
      } else if (typeArr[i] === "dark") {
        translatedTypeArr.push("siniestro");
      } else if (typeArr[i] === "rock") {
        translatedTypeArr.push("roca");
      } else if (typeArr[i] === "ground") {
        translatedTypeArr.push("tierra");
      } else if (typeArr[i] === "normal") {
        translatedTypeArr.push("normal");
      } else if (typeArr[i] === "ice") {
        translatedTypeArr.push("hielo");
      } else if (typeArr[i] === "fighting") {
        translatedTypeArr.push("lucha");
      }
    }
    return translatedTypeArr;
  },

  createImgSrcArr: function (typeArr) {
    const imgSrcArr = [];
    for (let i = 0; i < typeArr.length; i++) {
      if (typeArr[i] === "steel") {
        const imgSrcSteel = " ./assets/img/poke-types/tipo-acero.jpg";
        imgSrcArr.push(imgSrcSteel);
      } else if (typeArr[i] === "water") {
        const imgSrcWater = " ./assets/img/poke-types/tipo-agua.jpg";
        imgSrcArr.push(imgSrcWater);
      } else if (typeArr[i] === "bug") {
        const imgSrcBug = " ./assets/img/poke-types/tipo-bicho.jpg";
        imgSrcArr.push(imgSrcBug);
      } else if (typeArr[i] === "dragon") {
        const imgSrcDragon = " ./assets/img/poke-types/tipo-dragon.jpg";
        imgSrcArr.push(imgSrcDragon);
      } else if (typeArr[i] === "electric") {
        const imgSrcElectric = " ./assets/img/poke-types/tipo-electrico.jpg";
        imgSrcArr.push(imgSrcElectric);
      } else if (typeArr[i] === "ghost") {
        const imgSrcGhost = " ./assets/img/poke-types/tipo-fantasma.jpg";
        imgSrcArr.push(imgSrcGhost);
      } else if (typeArr[i] === "fire") {
        const imgSrcFire = " ./assets/img/poke-types/tipo-fuego.jpg";
        imgSrcArr.push(imgSrcFire);
      } else if (typeArr[i] === "fairy") {
        const imgSrcFairy = " ./assets/img/poke-types/tipo-hada.jpg";
        imgSrcArr.push(imgSrcFairy);
      } else if (typeArr[i] === "poison") {
        const imgSrcPoison = " ./assets/img/poke-types/tipo-veneno.jpg";
        imgSrcArr.push(imgSrcPoison);
      } else if (typeArr[i] === "grass") {
        const imgSrcGrass = " ./assets/img/poke-types/tipo-planta.jpg";
        imgSrcArr.push(imgSrcGrass);
      } else if (typeArr[i] === "psychic") {
        const imgSrcPsychic = " ./assets/img/poke-types/tipo-psiquico.jpg";
        imgSrcArr.push(imgSrcPsychic);
      } else if (typeArr[i] === "flying") {
        const imgSrcFlying = " ./assets/img/poke-types/tipo-volador.jpg";
        imgSrcArr.push(imgSrcFlying);
      } else if (typeArr[i] === "dark") {
        const imgSrcDark = " ./assets/img/poke-types/tipo-siniestro.jpg";
        imgSrcArr.push(imgSrcDark);
      } else if (typeArr[i] === "rock") {
        const imgSrcRock = " ./assets/img/poke-types/tipo-roca.jpg";
        imgSrcArr.push(imgSrcRock);
      } else if (typeArr[i] === "ground") {
        const imgSrcGround = " ./assets/img/poke-types/tipo-tierra.jpg";
        imgSrcArr.push(imgSrcGround);
      } else if (typeArr[i] === "normal") {
        const imgSrcNormal = " ./assets/img/poke-types/tipo-normal.jpg";
        imgSrcArr.push(imgSrcNormal);
      } else if (typeArr[i] === "ice") {
        const imgSrcIce = " ./assets/img/poke-types/tipo-hielo.jpg";
        imgSrcArr.push(imgSrcIce);
      } else if (typeArr[i] === "fighting") {
        const imgSrcFighting = " ./assets/img/poke-types/tipo-lucha.jpg";
        imgSrcArr.push(imgSrcFighting);
      }
    }
    return imgSrcArr;
  },

  createImg: function (imgSrcArr) {
    if (imgSrcArr.length === 1) {
      return (
        '<img src="' + imgSrcArr[0] + '" alt= "tipo de pokemon" class="image">'
      );
    } else {
      return (
        '<img src="' +
        imgSrcArr[0] +
        '" alt= "tipo de pokemon" class="image">' +
        '<img src="' +
        imgSrcArr[1] +
        '" alt= "tipo de pokemon" class="image">'
      );
    }
  },

  showAttacks: function (attacksArr) {
    if (attacksArr.length === 1) {
      return attacksArr[0].name;
    } else if (attacksArr.length === 2) {
      return attacksArr[0].name + ", " + attacksArr[1].name;
    } else {
      return (
        attacksArr[0].name +
        ", " +
        attacksArr[1].name +
        ", " +
        attacksArr[2].name
      );
    }
  },

  listPrevEvolutions: function (Obj) {
    const prevEvo = [];
    if (Obj.evolution["prev-evolution"] !== undefined) {
      if (Obj.evolution["prev-evolution"][0]["prev-evolution"] !== undefined) {
        prevEvo.push(
          Obj.evolution["prev-evolution"][0]["prev-evolution"][0].name
        );
        prevEvo.push(Obj.evolution["prev-evolution"][0].name);
        return prevEvo;
      } else {
        prevEvo.push(Obj.evolution["prev-evolution"][0].name);
        return prevEvo;
      }
    }
  },

  listNextEvolutions: function (Obj) {
    const nextEvo = [];
    if (Obj.evolution["next-evolution"] !== undefined) {
      if (Obj.evolution["next-evolution"][0]["next-evolution"] !== undefined) {
        nextEvo.push(Obj.evolution["next-evolution"][0].name);
        nextEvo.push(
          Obj.evolution["next-evolution"][0]["next-evolution"][0].name
        );
        return nextEvo;
      } else {
        nextEvo.push(Obj.evolution["next-evolution"][0].name);
        return nextEvo;
      }
    }
  },

  joinEvolutions: function (pokemon) {
    const result = [];
    const prevEvolutions = this.listPrevEvolutions(pokemon);
    const nextEvolutions = this.listNextEvolutions(pokemon);
    const currentEvolution = pokemon.name;
    if (nextEvolutions === undefined && prevEvolutions === undefined) {
      result.push(currentEvolution);
    } else if (prevEvolutions === undefined) {
      result.push(currentEvolution, nextEvolutions);
    } else if (nextEvolutions === undefined) {
      result.push(prevEvolutions, currentEvolution);
    } else {
      result.push(prevEvolutions, currentEvolution, nextEvolutions);
    }
    return result.flat().join(" -> ");
  },

  evaluateCaptureRate: function (data) {
    if (data === null) {
      return "Sin información";
    } else if (data === "not in capture") {
      return "No disponible para captura";
    } else if (data === "0") {
      return "Sin información";
    } else {
      return data;
    }
  },
};
export default dataFunctions;
