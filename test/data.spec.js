import dataFunctions from "../src/data.js";

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
  });

  describe("dataFunctions.createImg", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.createImg).toBe("function");
    });
    it("should return a string", () => {
      expect(typeof dataFunctions.createImg(imgSrcArr)).toBe("string");
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
  });

  describe("dataFunctions.listPrevEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.listPrevEvolutions).toBe("function");
    });
    /*    it('should return an array', () => {
      expect(typeof dataFunctions.listPrevEvolutions()).toBe('array');
    });*/
  });

  describe("dataFunctions.listNextEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.listNextEvolutions).toBe("function");
    });
    /*   it('should return an array', () => {
      expect(typeof dataFunctions.listNextEvolutions()).toBe('array');
    });
  */
  });

  describe("dataFunctions.joinEvolutions", () => {
    it("should be a function", () => {
      expect(typeof dataFunctions.joinEvolutions).toBe("function");
    });
    /*   it('should return a string', () => {
      expect(typeof dataFunctions.joinEvolutions()).toBe('string');
    });
  });
*/
    describe("dataFunctions.evaluateCaptureRate", () => {
      it("should be a function", () => {
        expect(typeof dataFunctions.evaluateCaptureRate).toBe("function");
      });
      it('should return "Sin información" for null', () => {
        expect(dataFunctions.evaluateCaptureRate(null)).toBe("Sin información");
      });
      it('should return "No disponible para captura" for "not in capture"', () => {
        expect(dataFunctions.evaluateCaptureRate("not in capture")).toBe(
          "No disponible para captura"
        );
      });
      it('should return "Sin información" for 0', () => {
        expect(dataFunctions.evaluateCaptureRate(null)).toBe("Sin información");
      });
    });
  });

  const typeArr = ["fire"];
  const typeArr2 = ["fire", "water"];
  const translatedTypeArr = ["fuego"];
  const translatedTypeArr2 = ["fuego", "agua"];
  const imgSrcArr = ["./img/pokemon-types/tipo-fuego.jpg"];
  const imgSrcArr2 = [
    "./img/pokemon-types/tipo-fuego.jpg",
    "./img/pokemon-types/tipo-agua.jpg",
  ];
});
