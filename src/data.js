const dataFunctions = {
  getData: async function () {
    try {
      const response = await fetch("./data/pokemon.json");
      const data = await response.json();
      return data.pokemon;
    } catch (e) {
      throw new Error(e);
    }
  },
  showPokemon: async function () {
    const data = await this.getData();
    this.createPokebox(data);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    pokeContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      const createPokebox = document.createElement("li");
      const pokeName = data[i].name;
      const pokeNum = data[i].num;
      createPokebox.className = "pokeLi";
      createPokebox.id = data[i].name;
      createPokebox.innerHTML += pokeNum.toString();
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += `<img src= "${data[i].img}" alt= "pokeImg${data[i].name}" class="image poke-img" id="${data[i].id}">`;
      createPokebox.innerHTML += "<br>";
      createPokebox.innerHTML += pokeName.toUpperCase();
      pokeContainer.insertAdjacentElement("beforeend", createPokebox);
    }
  },

  searchName: async function (input) {
    const data = await this.getData();
    return data.filter((poke) => poke.name.includes(input.toLowerCase()));
  },
  searchNumber: async function (input) {
    const data = await this.getData();
    return data.filter((poke) => poke.num.includes(input));
  },
  searchType: async function (input) {
    const data = await this.getData();
    return data.filter((poke) => poke.type.includes(input));
  },

  checkFilter: async function (value) {
    const data = await this.getData();
    const pokemonesTypes = [];
    data.forEach((poke) => {
      if (poke.type.includes(value)) {
        pokemonesTypes.push(poke);
      }
    });
    return pokemonesTypes;
  },

  createImgSrcArr: function (typeArr) {
    const imgSrcArr = [];
    for (let i = 0; i < typeArr.length; i++) {
      imgSrcArr.push(` ./assets/img/poke-types/${typeArr[i]}.jpg`)
    }
    return imgSrcArr;
  },

  createImg: function (imgSrcArr) {
    if (imgSrcArr.length === 1) {
      return (
        '<img src="' + imgSrcArr[0] + '" alt= "pokemon type'+ ` ${imgSrcArr[0]}`+'" class="image type-img">'
      );
    } else {
      return (
        '<img src="' +
        imgSrcArr[0] +
        '" alt= "pokemon type'+ ` ${imgSrcArr[0]}`+'" class="image type-img">' +
        '<img src="' +
        imgSrcArr[1] +
        '" alt= "pokemon type'+ ` ${imgSrcArr[1]}`+'" class="image type-img">'
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
    // const arrow = "<i class='fa fa-arrow-right'></i>";
    if (nextEvolutions === undefined && prevEvolutions === undefined) {
      result.push(currentEvolution);
    } else if (prevEvolutions === undefined) {
      result.push(currentEvolution, nextEvolutions);
    } else if (nextEvolutions === undefined) {
      result.push(prevEvolutions, currentEvolution);
    } else {
      result.push(prevEvolutions, currentEvolution, nextEvolutions);
    }
    return result.flat().join(' -> ');
  },

  evaluateCaptureRate: function (data) {
    if (data === null) {
      return "No data available";
    } else if (data === "not in capture") {
      return "Not available in capture";
    } else if (data === "0") {
      return "No data available";
    } else {
      return data;
    }
  },
};
export default dataFunctions;
