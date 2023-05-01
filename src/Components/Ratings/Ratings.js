import React from "react";

import styles from "./Ratings.module.css";

import { STAR_IMG } from "../../Utils/Constants/StaticData";

function Ratings({ rating = 0 }) {
  return (
    <div className={styles.Wrapper}>
      <span className={styles.Rating}>
        {rating && parseFloat(rating)?.toFixed(1)}
      </span>
      <img src={STAR_IMG} alt="Star" className={styles.Star} />
    </div>
  );
}

export default Ratings;
