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
  getPokeByName: async function (name) {
    const data = await this.getData();
    return data.filter((poke) => poke.name.includes(name.toLowerCase()));
  },
  getPokeByNumber: async function (num) {
    const data = await this.getData();
    return data.filter((poke) => poke.num.includes(num));
  },
  getPokeByType: async function (type) {
    const data = await this.getData();
    return data.filter((poke) => poke.type.includes(type));
  },
  sortPokeByName: async function (nameArr) {
    const data = await this.getData();
    const objArr = []
    nameArr.forEach(poke => {
      objArr.push(data.find(obj => obj.name === poke))
    })
    return objArr
  },
  sortPokeByNum: async function (numArr) {
    const data = await this.getData();
    const objArr = []
    numArr.forEach(poke => {
      objArr.push(data.find(obj => obj.num === poke))
    })
    return objArr
  },
  showPokemon: async function () {
    const data = await this.getData();
    this.createPokebox(data);
  },
  createPokebox: function (data) {
    const pokeContainer = document.querySelector(".flex-container");
    for (let i = 0; i < data.length; i++) {
      const pokeNumber = document.createElement("h2");
      pokeNumber.innerText = `${(data[i].num).toString()}`;
      pokeNumber.classList = "poke-card-text";

      const pokeName = document.createElement("h2");
      pokeName.innerText = `${(data[i].name).toUpperCase()}`;
      pokeName.classList = "poke-card-text";

      const pokeImg = document.createElement("img");
      pokeImg.src = `${data[i].img}`;
      pokeImg.alt = `${data[i].name} image`;
      pokeImg.classList = "image poke-img";

      const createPokebox = document.createElement("li");
      createPokebox.className = "poke-card";
      createPokebox.id = `${data[i].name}`;

      createPokebox.appendChild(pokeNumber);
      createPokebox.appendChild(pokeImg);
      createPokebox.appendChild(pokeName);
      pokeContainer.appendChild(createPokebox);
    }
  },

  createImgSrcArr: function (typeArr) {
    const imgSrcArr = [];
    for (let i = 0; i < typeArr.length; i++) {
      imgSrcArr.push(` ./assets/img/poke-types/${typeArr[i]}.jpg`);
    }
    return imgSrcArr;
  },

  createImg: function (imgSrcArr) {
    if (imgSrcArr.length === 1) {
      return (
        '<img src="' +
        imgSrcArr[0] +
        '" alt= "pokemon type' +
        ` ${imgSrcArr[0]}` +
        '" class="image type-img">'
      );
    } else {
      return (
        '<img src="' +
        imgSrcArr[0] +
        '" alt= "pokemon type' +
        ` ${imgSrcArr[0]}` +
        '" class="image type-img">' +
        '<img src="' +
        imgSrcArr[1] +
        '" alt= "pokemon type' +
        ` ${imgSrcArr[1]}` +
        '" class="image type-img">'
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
    return result.flat().join(" -> ");
  },

  evaluateCaptureRate: function (data) {
    return !data || data === "0"
      ? "No data available"
      : data === "not in capture"
        ? "Not available in capture"
        : data;
  },
};
export default dataFunctions;
