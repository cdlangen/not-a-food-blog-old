import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import RecipeMetric from "./recipe-metric";
import { GiCookingPot, GiForkKnifeSpoon } from "react-icons/gi";
import { RiKnifeFill } from "react-icons/ri";

import styles from "./blog-post.module.css";

function BlogPost(props) {
  const { _rawBody, _rawExcerpt, title, mainImage } = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
          <div className={styles.mainImageTextBlock}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.excerpt}>
              <PortableText blocks={_rawExcerpt} />
            </div>
            <div className={styles.recipeMetrics}>
              <RecipeMetric Icon={RiKnifeFill} text="prep time" quantity="30 min" />
              <RecipeMetric Icon={GiCookingPot} text="cooktime" quantity="20 min" />
              <RecipeMetric Icon={GiForkKnifeSpoon} text="servings" quantity="4" />
            </div>
          </div>
        </div>
      )}
      <Container>
        <div>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
