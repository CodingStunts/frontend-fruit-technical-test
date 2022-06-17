const SortFruit = () => {
  const handleSortSubmit = (e) => {
    e.preventDefault();
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
          />
          <label for="carbohydrates">Carbohydrates</label>
          <br />
          <input type="radio" id="protein" value="protein" name="sort" />
          <label for="protein">Protein</label>
          <br />
          <input type="radio" id="fat" value="fat" name="sort" />
          <label for="fat">Fat</label>
          <br />
          <input type="radio" id="calories" value="calories" name="sort" />
          <label for="calories">Calories</label>
          <br />
          <input type="radio" id="sugar" value="sugar" name="sort" />
          <label for="sugar">Sugar</label>
          <br />
        </section>
        <section className="sortByOrder">
          <h3>Sort order</h3>
          <input type="radio" id="high-low" value="high-low" name="order" />
          <label for="high-low">High to low</label>
          <input type="radio" id="low-high" value="low-high" name="order" />
          <label for="low-high">Low to high</label>
        </section>
        <button type="submit">Clear sort</button>
        <button type="submit">Confirm sort</button>
      </form>
    </div>
  );
};

export default SortFruit;
