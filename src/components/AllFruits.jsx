import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFruit } from "../utils/api-calls";
import FruitCard from "./FruitCard";
import SortFruit from "./SortFruit";
import styles from "../Modules-css/AllFruits.module.css";

export const AllFruits = () => {
  const resultsPerLoad = 6;
  const [fruitList, setFruitList] = useState([]);
  const [fruitListCopy, setFruitListCopy] = useState([]);
  const [error, setError] = useState(null);
  const [numberOfResults, setNumberOfResults] = useState(resultsPerLoad);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getAllFruit()
      .then((fruitData) => {
        setFruitList(fruitData);
        setFruitListCopy(fruitData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const moreFruit = () => {
    setNumberOfResults(numberOfResults + resultsPerLoad);
  };

  return (
    <div>
      <section className={styles.header}>
        <h1 className={styles.title}>Fruit.co.uk</h1>
        <button
          className={styles.sortButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Sort
        </button>
      </section>
      <section className={styles.allFruitBody}>
        {menuOpen ? (
          <SortFruit
            fruitList={fruitList}
            fruitListCopy={fruitListCopy}
            setFruitList={setFruitList}
          />
        ) : null}
        {error && <div> {error} </div>}
        {fruitList.length > 0 ? (
          <section className={styles.fruitList}>
            {fruitList.slice(0, numberOfResults).map((fruit) => {
              return (
                <Link to={`/${fruit.name}`}>
                  <FruitCard fruit={fruit} key={fruit.id} />
                </Link>
              );
            })}
          </section>
        ) : (
          <h2>Loading...</h2>
        )}
        {numberOfResults < fruitList.length ? (
          <button onClick={() => moreFruit()}>Load more</button>
        ) : null}
      </section>
    </div>
  );
};
