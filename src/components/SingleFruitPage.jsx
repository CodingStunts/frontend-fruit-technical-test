import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleFruit } from "../utils/api-calls";

export const SingleFruit = () => {
  const [fruit, setFruit] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleFruit(id).then((fruitData) => {
      setFruit(fruitData);
    });
  }, [id]);

  //Getting a yellow warning on console when calling navigation(-1) from onClick rather than a useEffect. Checking out later.
  return (
    <div>
      <section className="header">
        <h2>Fruits.co.uk</h2>
      </section>
      {fruit.name ? (
        <div>
          <h1>{fruit.name}</h1>
          <p>Genus: {fruit.genus}</p>
          <p>Family: {fruit.family}</p>
          <section className="nutrition">
            <h3>Nutrition</h3>
            <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
            <p>Protein: {fruit.nutritions.protein}</p>
            <p>Fat: {fruit.nutritions.fat}</p>
            <p>Calories: {fruit.nutritions.calories}</p>
            <p>Sugar: {fruit.nutritions.sugar}</p>
          </section>
          <img
            alt={fruit.name}
            src="https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/assorted%20fruit%20photo-6825-8b8e196d9d5fd4470911d69ad25fa5e0@1x.jpg"
          ></img>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <button onClick={() => navigate(-1)}>Back to all fruit</button>
    </div>
  );
};
