export const sortOrder = (fruitList, sortCriteria, order) => {
  let sortedArray = [...fruitList];
  sortedArray = sortedArray.sort(
    (a, b) => a.nutritions[sortCriteria] - b.nutritions[sortCriteria]
  );

  if (order === "asc") {
    return sortedArray;
  } else if (order === "desc") {
    const descArray = sortedArray.reverse();
    return descArray;
  }
};
