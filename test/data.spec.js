import dataFunctions from "../src/data.js";

describe("dataFunctions", () => {
  let data
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockData)
  }));
  it("should be an object", () => {
    expect(typeof dataFunctions).toBe("object");
  });

  describe("dataFunctions.getData", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.getData).toBe("function");
    });
    it('should return a promise', () => {
      expect(typeof dataFunctions.getData().then).toBe("function")
    })
    it('should fetch data successfully', () => {
      expect(data).toEqual(mockData.pokemon);
    });
  })

  describe("dataFunctions.getData when rejected", () => {
    beforeEach(async () => {
      fetch.mockRejectedValueOnce("Error fetching data");
    });
    it('should throw an error', async () => {
      const err = new Error("Error fetching data")
      await expect(dataFunctions.getData(url)).rejects.toThrow(err)
    });
  });

  describe("dataFunctions.getPokeByName", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.getPokeByName).toBe("function");
    });
    it('should return an object for "ivysaur"', () => {
      expect(typeof dataFunctions.getPokeByName(data, "ivysaur")).toBe("object");
    });
    it('should throw Error if called with wrong argument types', () => {
      expect(() => dataFunctions.getPokeByName(5)).toThrow("Wrong argument types");
    });
  });

  describe("dataFunctions.getPokeByNumber", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.getPokeByNumber).toBe("function");
    });
    it('should return an object for "001"', () => {
      expect(typeof dataFunctions.getPokeByNumber(data, "001")).toBe("object");
    });
    it('should throw Error if called with wrong argument types', () => {
      expect(() => dataFunctions.getPokeByNumber(15)).toThrow("Wrong argument types");
    });
  });

  describe("dataFunctions.getPokeByType", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.getPokeByType).toBe("function");
    });
    it('should return an object for "fire"', () => {
      expect(typeof dataFunctions.getPokeByType(data, "fire")).toBe("object");
    });
    it('should throw Error if called with wrong argument types', () => {
      expect(() => dataFunctions.getPokeByType(15)).toThrow("Wrong argument types");
    });
  });

  describe("dataFunctions.createCard", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.createCard).toBe("function");
    });
    it("should create a card with valid data" , async () => {
      const card = dataFunctions.createCard(data[0]);
      expect(card.tagName).toBe('LI');
      expect(card.classList).toContain('poke-card');
    })
  });

  describe("dataFunctions.sortPokeByName", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.sortPokeByName).toBe("function");
    });
    it("should return an object", () => {
      expect(typeof dataFunctions.sortPokeByName(data, ["bulbasaur", "ivysaur", "venusaur"])).toEqual("object");
    });
  });

  describe("dataFunctions.sortPokeByNum", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.sortPokeByNum).toBe("function");
    });
    it("should return an object", () => {
      expect(typeof dataFunctions.sortPokeByNum(data, ["001", "002", "003"])).toEqual("object");
    });
  });

  describe("dataFunctions.createImgSrcArr", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.createImgSrcArr).toBe("function");
    });
    it('should return ["./assets/img/poke-types/fire.jpg"] for ["fire"]', () => {
      expect(dataFunctions.createImgSrcArr(typeArr)).toEqual(imgSrcArr);
    });
    it('should return ["./assets/img/poke-types/fire.jpg", "./assets/img/poke-types/water.jpg"] for ["fire", "water"]', () => {
      expect(dataFunctions.createImgSrcArr(typeArr2)).toEqual(imgSrcArr2);
    });
    it("should return an array containing all type images src", () => {
      expect(dataFunctions.createImgSrcArr(typeArrAll)).toEqual(imgSrcArrAll);
    });
  });

  describe("dataFunctions.createImg", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.createImg).toBe("function");
    });
    it("should return an array of strings", () => {
      const img = dataFunctions.createImg(imgSrcArr)
      expect(typeof img).toBe("object");
      expect(typeof img[0]).toBe("string");
    });
    it("should return an array with length of 2 for a 2 element array", () => {
      expect(dataFunctions.createImg(imgSrcArr2).length).toBe(2);
    });
  });

  describe("dataFunctions.getTypeImgs", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.getTypeImgs).toBe("function");
    });
    it("should return a string with both html img elements for a 2 element array", () => {
      expect(typeof dataFunctions.getTypeImgs(["fire", "water"])).toBe("string");
      expect(dataFunctions.getTypeImgs(["fire", "water"])).toBe("<img src=\"./assets/img/poke-types/fire.jpg\" alt=\"pokemon type fire\" class=\"image type-img\"><img src=\"./assets/img/poke-types/water.jpg\" alt=\"pokemon type water\" class=\"image type-img\">")
    });
    it("should return a string with the html img element for a 1 element array", () => {
      expect(typeof dataFunctions.getTypeImgs(["poison"])).toBe("string");
      expect(dataFunctions.getTypeImgs(["poison"])).toBe("<img src=\"./assets/img/poke-types/poison.jpg\" alt=\"pokemon type poison\" class=\"image type-img\">");
    });
  });

  describe("dataFunctions.capFirstLetter", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.capFirstLetter).toBe("function");
    });
    it("should return a string", () => {
      expect(typeof dataFunctions.capFirstLetter("fire")).toBe("string");
    });
    it("should return 'Fire' for 'fire'", () => {
      expect(dataFunctions.capFirstLetter("fire")).toBe("Fire");
    });
    it("should throw a TypeError if called with wrong arguments", () => {
      const TypeError = Error('Wrong argument type')
      expect(() => dataFunctions.capFirstLetter(2)).toThrow(TypeError);
      expect(() => dataFunctions.capFirstLetter(null)).toThrow(TypeError);
      expect(() => dataFunctions.capFirstLetter(undefined)).toThrow(TypeError);
      expect(() => dataFunctions.capFirstLetter([])).toThrow(TypeError);
    });
  });

  describe("dataFunctions.showAttacks", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.showAttacks).toBe("function");
    });
    it("should return a string", () => {
      expect(typeof dataFunctions.showAttacks(atkArr)).toBe("string");
    });
    it("should return one value for a one element array", () => {
      expect(dataFunctions.showAttacks(attacksArr)).toEqual("Water gun");
    });
    it("should return all values for a three or more element array", () => {
      expect(dataFunctions.showAttacks(attacksArr2)).toBe(
        "Confusion, Struggle bug, Bug bite"
      );
    });
  });

  describe("dataFunctions.listPrevEvolutions", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.listPrevEvolutions).toBe("function");
    });
    it("should return an object", async () => {
      expect(typeof dataFunctions.listPrevEvolutions(data[1])).toEqual(
        "object"
      );
    });
  });

  describe("dataFunctions.listNextEvolutions", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.listNextEvolutions).toBe("function");
    });
    it("should return an object", async () => {
      expect(typeof dataFunctions.listNextEvolutions(data[1])).toEqual(
        "object"
      );
    });
  });

  describe("dataFunctions.joinEvolutions", () => {
    beforeEach(async () => {
      data = await dataFunctions.getData(url);
    });
    it("should be a function", () => {
      expect(typeof dataFunctions.joinEvolutions).toBe("function");
    });
    it("should return a string", async () => {
      expect(typeof dataFunctions.joinEvolutions(data[1])).toBe("string");
    });
    it("should return 'Bulbasaur -> Ivysaur -> Venusaur' for 'mockData[0]'", async () => {
      expect(dataFunctions.joinEvolutions(data[0])).toBe(
        "Bulbasaur -> Ivysaur -> Venusaur"
      );
    });
    it("should return 'Bulbasaur -> Ivysaur -> Venusaur' for 'mockData[1]'", async () => {
      expect(dataFunctions.joinEvolutions(data[1])).toBe(
        "Bulbasaur -> Ivysaur -> Venusaur"
      );
    });
    it("should return 'Bulbasaur -> Ivysaur -> Venusaur' for 'mockData[2]'", async () => {
      expect(dataFunctions.joinEvolutions(data[2])).toBe(
        "Bulbasaur -> Ivysaur -> Venusaur"
      );
    });
    it("should return 'Celebi' for 'mockData[3]'", async () => {
      expect(dataFunctions.joinEvolutions(data[3])).toBe(
        "Celebi"
      );
    });
  });

  describe("dataFunctions.evaluateCaptureRate", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.evaluateCaptureRate).toBe("function");
    });
    it('should return 5 for "5"', () => {
      expect(dataFunctions.evaluateCaptureRate("5")).toBe(5);
    });
    it('should return "Not available" for null', () => {
      expect(dataFunctions.evaluateCaptureRate(null)).toBe("Not available");
    });
    it('should return "Not available" for 0', () => {
      expect(dataFunctions.evaluateCaptureRate("0")).toBe("Not available");
    });
    it('should return "Not available" for "not in capture"', () => {
      expect(dataFunctions.evaluateCaptureRate("not in capture")).toBe(
        "Not available"
      );
    });
  });
});

// ========= MOCK DATA ========= //

const url = dataFunctions.url;
const mockData = {   "pokemon": [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  "encounter": {
    "base-flee-rate": "0.1",
    "base-capture-rate": "0.2"
  },
  "spawn-chance": "0.69",
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
    "max-cp": "1115",
    "max-hp": "113"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "quick-move": [
    {
      "name": "vine whip",
      "type": "grass",
      "base-damage": "7",
      "energy": "6",
      "move-duration-seg": "0.6"
    },
    {
      "name": "tackle",
      "type": "normal",
      "base-damage": "5",
      "energy": "5",
      "move-duration-seg": "0.5"
    }
  ],
  "special-attack": [
    {
      "name": "sludge bomb",
      "type": "poison",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.3"
    },
    {
      "name": "seed bomb",
      "type": "grass",
      "base-damage": "55",
      "energy": "-33",
      "move-duration-seg": "2.1"
    },
    {
      "name": "power whip",
      "type": "grass",
      "base-damage": "90",
      "energy": "-50",
      "move-duration-seg": "2.6"
    }
  ],
  "egg": "2 km",
  "buddy-distance-km": "3",
  "evolution": {
    "candy": "bulbasaur candy",
    "next-evolution": [{
      "num": "002",
      "name": "ivysaur",
      "candy-cost": "25",
      "next-evolution": [{
        "num": "003",
        "name": "venusaur",
        "candy-cost": "100"
      }]
    }]
  }
},
{
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  "encounter": {
    "base-flee-rate": "0.07",
    "base-capture-rate": "0.1"
  },
  "spawn-chance": "0.042",
  "stats": {
    "base-attack": "151",
    "base-defense": "143",
    "base-stamina": "155",
    "max-cp": "1699",
    "max-hp": "134"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "quick-move": [
    {
      "name": "razor leaf",
      "type": "grass",
      "base-damage": "13",
      "energy": "7",
      "move-duration-seg": "1"
    },
    {
      "name": "vine whip",
      "type": "grass",
      "base-damage": "7",
      "energy": "6",
      "move-duration-seg": "0.6"
    }
  ],
  "special-attack": [
    {
      "name": "sludge bomb",
      "type": "poison",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.3"
    },
    {
      "name": "solar beam",
      "type": "grass",
      "base-damage": "180",
      "energy": "-100",
      "move-duration-seg": "4.9"
    },
    {
      "name": "power whip",
      "type": "grass",
      "base-damage": "90",
      "energy": "-50",
      "move-duration-seg": "2.6"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "3",
  "evolution": {
    "candy": "bulbasaur candy",
    "next-evolution": [{
      "num": "003",
      "name": "venusaur",
      "candy-cost": "100"
    }],
    "prev-evolution": [{
      "num": "001",
      "name": "bulbasaur",
      "candy-cost": "25"
    }]
  }
},
{
  "num": "003",
  "name": "venusaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
  "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
  "size": {
    "height": "2.01 m",
    "weight": "100.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  "encounter": {
    "base-flee-rate": "0.05",
    "base-capture-rate": "0.05"
  },
  "spawn-chance": "0.017",
  "stats": {
    "base-attack": "198",
    "base-defense": "189",
    "base-stamina": "190",
    "max-cp": "2720",
    "max-hp": "162"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "quick-move": [
    {
      "name": "razor leaf",
      "type": "grass",
      "base-damage": "13",
      "energy": "7",
      "move-duration-seg": "1"
    },
    {
      "name": "vine whip",
      "type": "grass",
      "base-damage": "7",
      "energy": "6",
      "move-duration-seg": "0.6"
    }
  ],
  "special-attack": [
    {
      "name": "sludge bomb",
      "type": "poison",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.3"
    },
    {
      "name": "petal blizzard",
      "type": "grass",
      "base-damage": "110",
      "energy": "-100",
      "move-duration-seg": "2.6"
    },
    {
      "name": "solar beam",
      "type": "grass",
      "base-damage": "180",
      "energy": "-100",
      "move-duration-seg": "4.9"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "3",
  "evolution": {
    "candy": "bulbasaur candy",
    "prev-evolution": [{
      "num": "002",
      "name": "ivysaur",
      "candy-cost": "100",
      "prev-evolution": [{
        "num": "001",
        "name": "bulbasaur",
        "candy-cost": "25"
      }]
    }]
  }
},
{
  "num": "251",
  "name": "celebi",
  "generation": {
    "num": "generation ii",
    "name": "johto"
  },
  "about": "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
  "img": "https://www.serebii.net/pokemongo/pokemon/251.png",
  "size": {
    "height": "0.61 m",
    "weight": "5.0 kg"
  },
  "pokemon-rarity": "mythic",
  "type": [
    "psychic",
    "grass"
  ],
  "encounter": {
    "base-flee-rate": "0",
    "base-capture-rate": "100"
  },
  "spawn-chance": "0",
  "stats": {
    "base-attack": "210",
    "base-defense": "210",
    "base-stamina": "225",
    "max-cp": "3265",
    "max-hp": "189"
  },
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "ground"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "poison",
    "flying"
  ],
  "quick-move": [
    {
      "name": "confusion",
      "type": "psychic",
      "base-damage": "20",
      "energy": "15",
      "move-duration-seg": "1.6"
    },
    {
      "name": "charge beam",
      "type": "electric",
      "base-damage": "8",
      "energy": "15",
      "move-duration-seg": "1.1"
    }
  ],
  "special-attack": [
    {
      "name": "hyper beam",
      "type": "normal",
      "base-damage": "150",
      "energy": "-100",
      "move-duration-seg": "3.8"
    },
    {
      "name": "psychic",
      "type": "psychic",
      "base-damage": "100",
      "energy": "-100",
      "move-duration-seg": "2.8"
    },
    {
      "name": "dazzling gleam",
      "type": "fairy",
      "base-damage": "100",
      "energy": "-50",
      "move-duration-seg": "3.5"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "20",
  "evolution": {
    "candy": "celebi candy"
  }
}
]};

const typeArr = ["fire"];
const typeArr2 = ["fire", "water"];
const typeArrAll = [  "steel",
  "water",
  "bug",
  "dragon",
  "electric",
  "ghost",
  "fire",
  "fairy",
  "poison",
  "grass",
  "psychic",
  "flying",
  "dark",
  "rock",
  "ground",
  "normal",
  "ice",
  "fighting",
];
const imgSrcArr = ["./assets/img/poke-types/fire.jpg"];
const imgSrcArr2 = [ "./assets/img/poke-types/fire.jpg", "./assets/img/poke-types/water.jpg",];
const imgSrcArrAll = [
  "./assets/img/poke-types/steel.jpg",
  "./assets/img/poke-types/water.jpg",
  "./assets/img/poke-types/bug.jpg",
  "./assets/img/poke-types/dragon.jpg",
  "./assets/img/poke-types/electric.jpg",
  "./assets/img/poke-types/ghost.jpg",
  "./assets/img/poke-types/fire.jpg",
  "./assets/img/poke-types/fairy.jpg",
  "./assets/img/poke-types/poison.jpg",
  "./assets/img/poke-types/grass.jpg",
  "./assets/img/poke-types/psychic.jpg",
  "./assets/img/poke-types/flying.jpg",
  "./assets/img/poke-types/dark.jpg",
  "./assets/img/poke-types/rock.jpg",
  "./assets/img/poke-types/ground.jpg",
  "./assets/img/poke-types/normal.jpg",
  "./assets/img/poke-types/ice.jpg",
  "./assets/img/poke-types/fighting.jpg",
];
const atkArr = [
  {
    name: "vine whip",
    type: "grass",
    "base-damage": "7",
    energy: "6",
    "move-duration-seg": "0.6",
  },
  {
    name: "tackle",
    type: "normal",
    "base-damage": "5",
    energy: "5",
    "move-duration-seg": "0.5",
  },
];
const attacksArr = [
  {
    name: "water gun",
    type: "water",
    "base-damage": "5",
    energy: "5",
    "move-duration-seg": "0.5",
  },
];
const attacksArr2 = [
  {
    name: "confusion",
    type: "psychic",
    "base-damage": "20",
    energy: "15",
    "move-duration-seg": "1.6",
  },
  {
    name: "struggle bug",
    type: "bug",
    "base-damage": "15",
    energy: "15",
    "move-duration-seg": "1.5",
  },
  {
    name: "bug bite",
    type: "bug",
    "base-damage": "5",
    energy: "6",
    "move-duration-seg": "0.5",
  },
];
