import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFruit } from "../utils/api-calls";
import FruitCard from "./FruitCard";
import SortFruit from "./SortFruit";

export const AllFruits = () => {
  const [fruitList, setFruitList] = useState([]);
  const [fruitListCopy, setFruitListCopy] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getAllFruit().then((fruitData) => {
      setFruitList(fruitData);
      setFruitListCopy(fruitData);
    });
  }, []);

  return (
    <div>
      <section className="header">
        <h1>Fruits.co.uk</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>Sort</button>
        {menuOpen ? (
          <SortFruit
            fruitList={fruitList}
            fruitListCopy={fruitListCopy}
            setFruitList={setFruitList}
          />
        ) : null}
      </section>
      {fruitList.length > 0 ? (
        <ul>
          {fruitList.map((fruit) => {
            return (
              <Link to={`/${fruit.name}`}>
                <li key={fruit.id}>
                  <FruitCard fruit={fruit} />
                </li>
              </Link>
            );
          })}
        </ul>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
