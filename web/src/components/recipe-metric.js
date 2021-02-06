import React from "react";
import styles from "./recipe-metric.module.css";

function RecipeMetric(props) {
  const { Icon, text, quantity } = props;
  return (
    <div className={styles.root}>
      <h1>
        <Icon />
      </h1>
      <h4>{text}</h4>
      <h4>{quantity}</h4>
    </div>
  );
}

export default RecipeMetric;
