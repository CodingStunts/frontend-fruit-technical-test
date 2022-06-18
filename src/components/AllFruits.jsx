import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFruit } from "../utils/api-calls";
import FruitCard from "./FruitCard";
import SortFruit from "./SortFruit";

export const AllFruits = () => {
  const [fruitList, setFruitList] = useState([]);
  const [fruitListCopy, setFruitListCopy] = useState([]);

  useEffect(() => {
    getAllFruit().then((fruitData) => {
      setFruitList(fruitData);
      setFruitListCopy(fruitData);
    });
  }, []);

  const openSortMenu = () => {
    //Will open the sort menu
  };

  return (
    <div>
      <section className="header">
        <h1>Fruits.co.uk</h1>
        <button onClick={openSortMenu}>Sort</button>
        <SortFruit
          fruitList={fruitList}
          fruitListCopy={fruitListCopy}
          setFruitList={setFruitList}
        />
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
