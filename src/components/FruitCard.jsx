import { useState } from "react";
import { getPhotos } from "../utils/api-calls";
import styles from "../Modules-css/FruitCard.module.css";

const FruitCard = ({ fruit }) => {
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(null);

  getPhotos(fruit.name)
    .then((photoData) => {
      setPhoto(photoData.results[0].urls.regular);
    })
    .catch((err) => {
      setError(err.message);
    });

  return (
    <div className={styles.fruitCard}>
      {error && <div> Image failed to load - {error} </div>}
      <img alt={fruit.name} width="150" src={photo}></img>
      <h3 key={fruit.id}>{fruit.name}</h3>
    </div>
  );
};

export default FruitCard;
