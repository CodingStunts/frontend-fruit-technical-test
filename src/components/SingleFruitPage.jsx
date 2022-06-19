import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleFruit, getPhotos } from "../utils/api-calls";
import styles from "../Modules-css/SingleFruitPage.module.css";

export const SingleFruit = () => {
  const [fruit, setFruit] = useState([]);
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleFruit(id)
      .then((fruitData) => {
        setFruit(fruitData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  getPhotos(fruit.name)
    .then((photoData) => {
      setPhoto(photoData.results[0].urls.regular);
    })
    .catch((err) => {
      setError(err.message);
    });

  return (
    <div>
      <section className={styles.header}>
        <h2 className={styles.title}>Fruit.co.uk</h2>
      </section>
      {error && <div> {error} </div>}
      {fruit.name ? (
        <div className={styles.singleFruitPage}>
          <section className={styles.fruitDetails}>
            <section className={styles.names}>
              <h1 className={styles.fruitName}>{fruit.name}</h1>
              <p>Genus: {fruit.genus}</p>
              <p>Family: {fruit.family}</p>
            </section>
            <section className={styles.nutrition}>
              <h3>Nutrition</h3>
              <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
              <p>Protein: {fruit.nutritions.protein}</p>
              <p>Fat: {fruit.nutritions.fat}</p>
              <p>Calories: {fruit.nutritions.calories}</p>
              <p>Sugar: {fruit.nutritions.sugar}</p>
            </section>
          </section>
          <section className={styles.photoAndButton}>
            <img
              className={styles.fruitImage}
              alt={fruit.name}
              width="350"
              src={photo}
            ></img>
            <button onClick={() => navigate(-1)}>Back to all fruit</button>
          </section>
        </div>
      ) : (
        <div>
          <h2>Loading...</h2>
          <button onClick={() => navigate(-1)}>Back to all fruit</button>
        </div>
      )}
    </div>
  );
};
