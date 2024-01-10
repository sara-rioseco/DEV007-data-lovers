const dataFunctions = {
  url: "./data/pokemon.json",
  getData: async function (url) {
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const data = await response.json();
      return data.pokemon;
    } catch (e) {
      throw new Error(e);
    }
  },
  getPokeByName: function (data, name) {
    if (!data || !name || typeof name !== "string"){
      throw new Error("Wrong argument types")
    }
    return data.filter((poke) => poke.name.includes(name.toLowerCase()));
  },
  getPokeByNumber:function (data, num) {
    if (!data || !num || typeof num !== "string"){
      throw new Error("Wrong argument types")
    }
    return data.filter((poke) => poke.num.includes(num));

  },
  getPokeByType: function (data, type) {
    if (!data || !type || typeof type !== "string"){
      throw new Error("Wrong argument types")
    }
    return data.filter((poke) => poke.type.includes(type));
  },
  sortPokeByName: async function (data, nameArr) {
    const objArr = [];
    nameArr.forEach((poke) => {
      objArr.push(data.find((obj) => obj.name === poke));
    });
    return objArr;
  },
  sortPokeByNum: async function (data, numArr) {
    const objArr = [];
    numArr.forEach((poke) => {
      objArr.push(data.find((obj) => obj.num === poke));
    });
    return objArr;
  },

  createCard: function (data) {
    const pokeNumber = document.createElement("h2");
    pokeNumber.innerText = `${data.num.toString()}`;
    pokeNumber.classList = "poke-card-text";

    const pokeImg = document.createElement("img");
    pokeImg.src = `${data.img}`;
    pokeImg.alt = `${data.name} image`;
    pokeImg.classList = "image poke-img";
    pokeImg.loading = "lazy";

    const pokeName = document.createElement("h2");
    pokeName.innerText = `${data.name.toUpperCase()}`;
    pokeName.classList = "poke-card-text";

    const card = document.createElement("li");
    card.className = "poke-card";
    card.id = `${data.name}`;

    card.appendChild(pokeNumber);
    card.appendChild(pokeImg);
    card.appendChild(pokeName);
    return card;
  },

  createImgSrcArr: function (typeArr) {
    const imgSrcArr = [];
    for (let i = 0; i < typeArr.length; i++) {
      imgSrcArr.push(`./assets/img/poke-types/${typeArr[i]}.jpg`);
    }
    return imgSrcArr;
  },

  createImg: function (srcArr) {
    return srcArr.map(
      (src) =>
        `<img src="${src}" alt="pokemon type ${src.slice(
          24,
          -4
        )}" class="image type-img">`
    );
  },

  getTypeImgs: function (types) {
    const arr = this.createImg(this.createImgSrcArr(types));
    return arr.join("");
  },

  capFirstLetter: (str) => {
    if (typeof str !== "string" ) throw new TypeError('Wrong argument type');
    else return str[0].toUpperCase() + str.slice(1)
  },

  showAttacks: function (attacksArr) {
    if (attacksArr.length === 1) {
      return this.capFirstLetter(attacksArr[0].name);
    } else if (attacksArr.length === 2) {
      return (
        this.capFirstLetter(attacksArr[0].name) +
        ", " +
        this.capFirstLetter(attacksArr[1].name)
      );
    } else {
      return (
        this.capFirstLetter(attacksArr[0].name) +
        ", " +
        this.capFirstLetter(attacksArr[1].name) +
        ", " +
        this.capFirstLetter(attacksArr[2].name)
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
    const prev = this.listPrevEvolutions(pokemon);
    const next = this.listNextEvolutions(pokemon);
    const current = pokemon.name;
    // const arrow = "<i class='fa fa-arrow-right'></i>";
    if (next === undefined && prev === undefined) {
      result.push(current);
    } else if (prev === undefined) {
      result.push(current, next);
    } else if (next === undefined) {
      result.push(prev, current);
    } else {
      result.push(prev, current, next);
    }
    return result
      .flat()
      .map((item) => this.capFirstLetter(item))
      .join(" -> ");
  },

  evaluateCaptureRate: function (data) {
    return !data || data === "0" || data === "not in capture"
      ? "Not available"
      : Number(data);
  },
};
export default dataFunctions;
