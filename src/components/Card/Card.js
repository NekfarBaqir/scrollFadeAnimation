import React from "react";
import styles from "./Card.module.css";
const Card = (data) => {
  console.log(data);
  const { name, imageUrl } = data.data;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <img src={`${imageUrl}`} width="100%" height="300px" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
