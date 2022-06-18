import { sortOrder } from "../utils/sort-order.js";
import { useState } from "react";

const SortFruit = ({ fruitList, setFruitList }) => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [order, setOrder] = useState("");

  const handleSort = (e) => {
    e.preventDefault();
    setSortCriteria(e.target.value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    let sortReturn = sortOrder(fruitList, sortCriteria, order);
    setFruitList(sortReturn);
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
            id="desc"
            value="desc"
            name="order"
            onChange={handleOrder}
          />
          <label for="desc">High to low</label>
          <input
            type="radio"
            id="asc"
            value="asc"
            name="order"
            onChange={handleOrder}
          />
          <label for="asc">Low to high</label>
        </section>
        <button type="">Clear sort</button>
        <button type="submit">Confirm sort</button>
      </form>
    </div>
  );
};

export default SortFruit;
