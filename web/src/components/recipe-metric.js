import React from "react";
import styles from "./recipe-metric.module.css";

function RecipeMetric(props) {
  const { Icon, text, quantity } = props;
  return (
    <div className={styles.root}>
      <h1>
        <Icon />
      </h1>
      <h5>{text}</h5>
      <h5>{quantity}</h5>
    </div>
  );
}

export default RecipeMetric;
