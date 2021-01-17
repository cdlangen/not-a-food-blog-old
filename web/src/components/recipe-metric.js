import React from "react";
import styles from "./recipe-metrics.module.css";

function RecipeMetric(props) {
  const { Icon, text, quantity } = props;
  return (
    <div className={styles.root}>
      <h1>
        <Icon />
      </h1>
      <h6>{text}</h6>
      <h6>{quantity}</h6>
    </div>
  );
}

export default RecipeMetric;
