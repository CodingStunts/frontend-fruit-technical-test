import { sortOrder } from "../utils/sort-order.js";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Modules-css/SortBox.module.css";

const SortFruit = ({ fruitList, fruitListCopy, setFruitList }) => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [order, setOrder] = useState("");
  const [sortParams, setSortParams] = useSearchParams();

  const handleSort = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  //Tried using useNavigate to push "/sort" before the query string but couldn't get it working.
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
    <div className={styles.sortBox}>
      <h3 className={styles.title}>Sort fruit</h3>
      <form onSubmit={handleSortSubmit}>
        <section className={styles.sortByNutrition}>
          <h3>Sort by nutrition</h3>
          <input
            type="radio"
            id="carbohydrates"
            value="carbohydrates"
            name="sort"
            checked={"carbohydrates" === sortCriteria}
            onChange={handleSort}
          />
          <label htmlFor="carbohydrates">Carbohydrates</label>
          <br />
          <input
            type="radio"
            id="protein"
            value="protein"
            name="sort"
            checked={"protein" === sortCriteria}
            onChange={handleSort}
          />
          <label htmlFor="protein">Protein</label>
          <br />
          <input
            type="radio"
            id="fat"
            value="fat"
            name="sort"
            checked={"fat" === sortCriteria}
            onChange={handleSort}
          />
          <label htmlFor="fat">Fat</label>
          <br />
          <input
            type="radio"
            id="calories"
            value="calories"
            name="sort"
            checked={"calories" === sortCriteria}
            onChange={handleSort}
          />
          <label htmlFor="calories">Calories</label>
          <br />
          <input
            type="radio"
            id="sugar"
            value="sugar"
            name="sort"
            checked={"sugar" === sortCriteria}
            onChange={handleSort}
          />
          <label htmlFor="sugar">Sugar</label>
          <br />
        </section>
        <section className={styles.sortByOrder}>
          <h3>Sort order</h3>
          <input
            type="radio"
            id="highToLow"
            value="highToLow"
            name="order"
            checked={"highToLow" === order}
            onChange={handleOrder}
          />
          <label htmlFor="highToLow">High to low</label>
          <br />
          <input
            type="radio"
            id="lowToHigh"
            value="lowToHigh"
            name="order"
            checked={"lowToHigh" === order}
            onChange={handleOrder}
          />
          <label htmlFor="lowToHigh">Low to high</label>
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
