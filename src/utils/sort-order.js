export const sortOrder = (fruitList, sortCriteria, order) => {
  let sortedArray = [...fruitList];
  sortedArray = sortedArray.sort(
    (a, b) => a.nutritions[sortCriteria] - b.nutritions[sortCriteria]
  );

  if (order === "lowToHigh") {
    return sortedArray;
  } else if (order === "highToLow") {
    const descArray = sortedArray.reverse();
    return descArray;
  }
};
