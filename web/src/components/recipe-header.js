import React, { useState } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import RecipeMetric from "./recipe-metric";
import { GiCookingPot, GiForkKnifeSpoon } from "react-icons/gi";
import { RiKnifeFill } from "react-icons/ri";

import styles from "./recipe-header.module.css";

function RecipeHeader(props) {
  const { _rawExcerpt, title, mainImage } = props;
  const [imgurl] = useState(
    mainImage &&
      mainImage.asset &&
      imageUrlFor(buildImageObj(mainImage))
        .width(1500)
        .height(Math.floor((9 / 16) * 1200))
        .fit("crop")
        .auto("format")
        .url()
  );
  return (
    <div
      className={styles.recipeSummary}
      style={{
        backgroundImage: `url(${imgurl})`,
        backgroundSize: "cover",
        backgroundPosition: "-0px -0px",
      }}
    >
      <div className={styles.recipeSummaryContentWrapper}>
        <div className={styles.recipeSummaryContent}>
          <div>
            <h1>{title}</h1>
            <div>
              <PortableText blocks={_rawExcerpt} />
            </div>
            <div className={styles.recipeSummaryContentMetrics}>
              <RecipeMetric Icon={RiKnifeFill} text="prep time" quantity="30 min" />
              <RecipeMetric Icon={GiCookingPot} text="cooktime" quantity="20 min" />
              <RecipeMetric Icon={GiForkKnifeSpoon} text="servings" quantity="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeHeader;
