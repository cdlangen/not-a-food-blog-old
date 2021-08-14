import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import RecipeMetric from "./recipe-metric";
import { GiCookingPot, GiForkKnifeSpoon } from "react-icons/gi";
import { RiKnifeFill } from "react-icons/ri";
import RecipeHeader from "./recipe-header";

import styles from "./recipe.module.css";

function Recipe(props) {
  const {
    _rawExcerpt,
    title,
    mainImage,
    recipeIngredients,
    recipeInstructions,
    recipeNotes,
  } = props;
  return (
    <article className={styles.root}>
      <RecipeHeader _rawExcerpt={_rawExcerpt} title={title} mainImage={mainImage}></RecipeHeader>
      <Container>
        <div className={styles.mainContent}>
          <div className={styles.recipeContainer}>
            <div className={styles.recipeIngredients}>
              <h1>Ingredients</h1>
              <ul>
                {recipeIngredients.map((value, index) => {
                  return <li key={index}>{value.text}</li>;
                })}
              </ul>
            </div>
            <div className={styles.recipeInstructions}>
              <h1>Instructions</h1>
              <ol>
                {recipeInstructions.map((value, index) => {
                  return <li key={index}>{value.text}</li>;
                })}
              </ol>
              <br />
              {recipeNotes.length > 0 && (
                <div className={styles.recipeNotes}>
                  <h2>Notes</h2>
                  <ul>
                    {recipeNotes.map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

export default Recipe;
