import { useEffect, useState } from "react";
import { getAllFruit } from "../utils/api-calls";

export const AllFruits = () => {
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    getAllFruit().then((fruitData) => {
      setFruitList(fruitData);
    });
  }, []);

  return (
    <div>
      <h1>Hi, this is all fruits!</h1>
      {fruitList ? (
        <ul>
          <li>{fruitList[0].name}</li>
          <li>Working!</li>
        </ul>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
