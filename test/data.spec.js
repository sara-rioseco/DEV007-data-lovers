import dataFunctions from "../src/data.js";
import data from "../src/data/pokemon/pokemon.js";

describe("dataFunctions", () => {
  it("should be an object", () => {
    expect(typeof dataFunctions).toBe("object");
  });

  describe("dataFunctions.showPokemon", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.showPokemon).toBe("function");
    });
  });

  describe("dataFunctions.createPokebox", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.createPokebox).toBe("function");
    });
  });

  describe("dataFunctions.searchName", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.searchName).toBe("function");
    });
    it('should return a string for "pikachu"', () => {
      expect(typeof dataFunctions.searchName("pikachu")).toBe("object");
    });
  });

  describe("dataFunctions.searchNumber", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.searchNumber).toBe("function");
    });
    it('should return an object for "001"', () => {
      expect(typeof dataFunctions.searchNumber("001")).toBe("object");
    });
  });

  describe("dataFunctions.searchType", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.searchType).toBe("function");
    });
    it('should return an object for "fire"', () => {
      expect(typeof dataFunctions.searchType("fire")).toBe("object");
    });
  });

  describe("dataFunctions.translateType", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.translateType).toBe("function");
    });
    it('should return ["fuego"] for ["fire"]', () => {
      expect(dataFunctions.translateType(typeArr)).toEqual(translatedTypeArr);
    });
    it('should return ["fuego", "agua"] for ["fire", "water"]', () => {
      expect(dataFunctions.translateType(typeArr2)).toEqual(translatedTypeArr2);
    });
    it('should return an array containing all types translated into spanish', () => {
      expect(dataFunctions.translateType(typeArrAll)).toEqual(translatedTypeArrAll);
    });
  });

  describe("dataFunctions.createImgSrcArr", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.createImgSrcArr).toBe("function");
    });
    it('should return ["./img/pokemon-types/tipo-fuego.jpg"] for ["fire"]', () => {
      expect(dataFunctions.createImgSrcArr(typeArr)).toEqual(imgSrcArr);
    });
    it('should return ["./img/pokemon-types/tipo-fuego.jpg", "./img/pokemon-types/tipo-agua.jpg"] for ["fire", "water"]', () => {
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
    it("should return a string", () => {
      expect(typeof dataFunctions.createImg(imgSrcArr)).toBe("string");
    });
    it("should return a string", () => {
      expect(typeof dataFunctions.createImg(imgSrcArr2)).toBe("string");
    });
  });

  describe("dataFunctions.showAttacks", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.showAttacks).toBe("function");
    });
    it("should return a string", () => {
      expect(
        typeof dataFunctions.showAttacks([
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
        ])
      ).toBe("string");
    });
    it("should return one value for a one element array", () => {
      expect(dataFunctions.showAttacks(attacksArr)).toEqual("water gun");
    });
    it("should return all values for a three or more element array", () => {
      expect(dataFunctions.showAttacks(attacksArr2)).toBe("confusion, struggle bug, bug bite");
    });
  });

  describe("dataFunctions.listPrevEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.listPrevEvolutions).toBe("function");
    });
    it("should return an object", () => {
      expect(typeof dataFunctions.listPrevEvolutions(pokeDetails1)).toEqual(
        "object"
      );
    });
  });

  describe("dataFunctions.listNextEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.listNextEvolutions).toBe("function");
    });
    it("should return an object", () => {
      expect(typeof dataFunctions.listNextEvolutions(pokeDetails1)).toEqual(
        "object"
      );
    });
  });

  describe("dataFunctions.joinEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.joinEvolutions).toBe("function");
    });
    it("should return a string", () => {
      expect(typeof dataFunctions.joinEvolutions(pokeDetails1)).toBe("string");
    });
    it("should return 'celebi' for 'celebi'" , () => {
      expect(dataFunctions.joinEvolutions(pokeCelebi)).toBe("celebi");
    });
    it("should return 'bulbasaur -> ivysaur -> venusaur' for 'pokeDetails'" , () => {
      expect(dataFunctions.joinEvolutions(pokeDetails0)).toBe("bulbasaur -> ivysaur -> venusaur");
    });
    it("should return 'bulbasaur -> ivysaur -> venusaur' for 'pokeDetails'" , () => {
      expect(dataFunctions.joinEvolutions(pokeDetails1)).toBe("bulbasaur -> ivysaur -> venusaur");
    });
    it("should return 'bulbasaur -> ivysaur -> venusaur' for 'pokeDetails'" , () => {
      expect(dataFunctions.joinEvolutions(pokeDetails2)).toBe("bulbasaur -> ivysaur -> venusaur");
    });
  });

  describe("dataFunctions.evaluateCaptureRate", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.evaluateCaptureRate).toBe("function");
    });
    it('should return "Sin información" for null', () => {
      expect(dataFunctions.evaluateCaptureRate(null)).toBe("Sin información");
    });
    it('should return "Sin información" for 0', () => {
      expect(dataFunctions.evaluateCaptureRate("0")).toBe("Sin información");
    });
    it('should return "5" for "5"', () => {
      expect(dataFunctions.evaluateCaptureRate("5")).toBe("5");
    });
    it('should return "No disponible para captura" for "not in capture"', () => {
      expect(dataFunctions.evaluateCaptureRate("not in capture")).toBe(
        "No disponible para captura"
      );
    });
  });
});

const typeArr = ["fire"];
const typeArr2 = ["fire", "water"];
const typeArrAll = ["steel", "water", "bug", "dragon", "electric", "ghost", "fire", "fairy", "poison", "grass", "psychic", "flying", "dark", "rock", "ground", "normal", "ice", "fighting"];
const translatedTypeArr = ["fuego"];
const translatedTypeArr2 = ["fuego", "agua"];
const translatedTypeArrAll = ["acero", "agua", "bicho", "dragón", "eléctrico", "fantasma", "fuego", "hada", "veneno", "hierba", "psíquico", "volador", "siniestro", "roca", "tierra", "normal", "hielo", "lucha"];
const imgSrcArr = ["./img/pokemon-types/tipo-fuego.jpg"];
const imgSrcArr2 = [
  "./img/pokemon-types/tipo-fuego.jpg",
  "./img/pokemon-types/tipo-agua.jpg",
];
const imgSrcArrAll = [
  "./img/pokemon-types/tipo-acero.jpg",
  "./img/pokemon-types/tipo-agua.jpg",
  "./img/pokemon-types/tipo-bicho.jpg",
  "./img/pokemon-types/tipo-dragon.jpg",
  "./img/pokemon-types/tipo-electrico.jpg",
  "./img/pokemon-types/tipo-fantasma.jpg",
  "./img/pokemon-types/tipo-fuego.jpg",
  "./img/pokemon-types/tipo-hada.jpg",
  "./img/pokemon-types/tipo-veneno.jpg",
  "./img/pokemon-types/tipo-planta.jpg",
  "./img/pokemon-types/tipo-psiquico.jpg",
  "./img/pokemon-types/tipo-volador.jpg",
  "./img/pokemon-types/tipo-siniestro.jpg",
  "./img/pokemon-types/tipo-roca.jpg",
  "./img/pokemon-types/tipo-tierra.jpg",
  "./img/pokemon-types/tipo-normal.jpg",
  "./img/pokemon-types/tipo-hielo.jpg",
  "./img/pokemon-types/tipo-lucha.jpg",
];
const pokeDetails0 = data.pokemon[0];
const pokeDetails1 = data.pokemon[1];
const pokeDetails2 = data.pokemon[2];
const pokeCelebi = data.pokemon[250];
const attacksArr = [
  {
    "name": "water gun",
    "type": "water",
    "base-damage": "5",
    "energy": "5",
    "move-duration-seg": "0.5"
  }];
const attacksArr2 = [
  {
    "name": "confusion",
    "type": "psychic",
    "base-damage": "20",
    "energy": "15",
    "move-duration-seg": "1.6"
  },
  {
    "name": "struggle bug",
    "type": "bug",
    "base-damage": "15",
    "energy": "15",
    "move-duration-seg": "1.5"
  },
  {
    "name": "bug bite",
    "type": "bug",
    "base-damage": "5",
    "energy": "6",
    "move-duration-seg": "0.5"
  }
]