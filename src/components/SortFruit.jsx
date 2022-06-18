import { sortOrder } from "../utils/sort-order.js";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

//Still need to implement functionality on CLEAR button.

const SortFruit = ({ fruitList, fruitListCopy, setFruitList }) => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [order, setOrder] = useState("");
  const [sortParams, setSortParams] = useSearchParams();

  const handleSort = (e) => {
    e.preventDefault();
    setSortCriteria(e.target.value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  //Tried using useNavigate to push "/sort before the query string but couldn't get it working."
  const handleSortSubmit = (e) => {
    e.preventDefault();
    setSortParams({ nutrition: sortCriteria, order: order });
    let sortReturn = sortOrder(fruitList, sortCriteria, order);
    setFruitList(sortReturn);
  };

  const resetSort = () => {
    setFruitList(fruitListCopy);
    setSortParams({});
  };

  return (
    <div>
      <h3>Sort fruit</h3>
      <form onSubmit={handleSortSubmit}>
        <section className="sortByNutrition">
          <h3>Sort by nutrition</h3>
          <input
            type="radio"
            id="carbohydrates"
            value="carbohydrates"
            name="sort"
            onChange={handleSort}
          />
          <label for="carbohydrates">Carbohydrates</label>
          <br />
          <input
            type="radio"
            id="protein"
            value="protein"
            name="sort"
            onChange={handleSort}
          />
          <label for="protein">Protein</label>
          <br />
          <input
            type="radio"
            id="fat"
            value="fat"
            name="sort"
            onChange={handleSort}
          />
          <label for="fat">Fat</label>
          <br />
          <input
            type="radio"
            id="calories"
            value="calories"
            name="sort"
            onChange={handleSort}
          />
          <label for="calories">Calories</label>
          <br />
          <input
            type="radio"
            id="sugar"
            value="sugar"
            name="sort"
            onChange={handleSort}
          />
          <label for="sugar">Sugar</label>
          <br />
        </section>
        <section className="sortByOrder">
          <h3>Sort order</h3>
          <input
            type="radio"
            id="highToLow"
            value="highToLow"
            name="order"
            onChange={handleOrder}
          />
          <label for="highToLow">High to low</label>
          <input
            type="radio"
            id="lowToHigh"
            value="lowToHigh"
            name="order"
            onChange={handleOrder}
          />
          <label for="lowToHigh">Low to high</label>
        </section>
        <button type="reset" value="clear" onClick={resetSort}>
          Clear sort
        </button>
        <button type="submit" value="confirm">
          Confirm sort
        </button>
      </form>
    </div>
  );
};

export default SortFruit;
