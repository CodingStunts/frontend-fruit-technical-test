import { sortOrder } from "../utils/sort-order.js";

const testArray = [
  {
    genus: "Malus",
    name: "Apple",
    id: 6,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
  },
  {
    genus: "Prunus",
    name: "Apricot",
    id: 35,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.5,
      fat: 0.1,
      calories: 15,
      sugar: 3.2,
    },
  },
  {
    genus: "Musa",
    name: "Banana",
    id: 1,
    family: "Musaceae",
    order: "Zingiberales",
    nutritions: {
      carbohydrates: 22,
      protein: 1,
      fat: 0.2,
      calories: 96,
      sugar: 17.2,
    },
  },
];

describe("Sort order functions as expected", () => {
  test("Can sort in descending order by a given criteria", () => {
    const sortedFruit = sortOrder(testArray, "carbohydrates", "highToLow");
    const carbohydrates = sortedFruit.map((fruit) => {
      return fruit.nutritions.carbohydrates;
    });
    expect(carbohydrates).toBeSorted({ descending: true });
  });

  test("Can sort in descending order by a given criteria", () => {
    const sortedFruit = sortOrder(testArray, "protein", "highToLow");
    const proteins = sortedFruit.map((fruit) => {
      return fruit.nutritions.protein;
    });
    expect(proteins).toBeSorted({ descending: true });
  });

  test("Can sort in ascending order by a given criteria", () => {
    const sortedFruit = sortOrder(testArray, "fat", "lowToHigh");
    const fats = sortedFruit.map((fruit) => {
      return fruit.nutritions.fat;
    });
    expect(fats).toBeSorted();
  });

  test("Can sort in ascending order by a given criteria", () => {
    const sortedFruit = sortOrder(testArray, "sugar", "lowToHigh");
    const sugars = sortedFruit.map((fruit) => {
      return fruit.nutritions.sugar;
    });
    expect(sugars).toBeSorted();
  });
});
