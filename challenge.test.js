const { secondHalfOfArrayIfItIsEven, youGottaCalmDown } = require("./arrays");

/**
 * Remove the "x" from "xdescribe" 👇🏼
 */
describe("🌶️ Challenges", () => {
  describe("🌶️ secondHalfOfArrayIfItIsEven", () => {
    it("returns the second half of the array if the length is even", () => {
      expect(
        secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"])
      ).toEqual(["banana", "kiwi"]);
    });

    it("returns an empty array if the length is odd", () => {
      expect(
        secondHalfOfArrayIfItIsEven([
          "apple",
          "orange",
          "banana",
          "kiwi",
          "blueberry",
        ])
      ).toEqual([]);
    });
  });

  describe("🌶️🌶️🌶️ youGottaCalmDown", () => {
    it("returns the string with at most one exclamation mark at the end", () => {
      expect(youGottaCalmDown("HI!!!!!!!!!!")).toBe("HI!");
      expect(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!")).toBe(
        "Taylor Schwift!"
      );
      expect(youGottaCalmDown("Hellooooo")).toBe("Hellooooo");
    });
  });
});
