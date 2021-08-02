import React from "react";
import { DefaultContext } from "react-icons/lib";

import RecipeHeader from "./recipe-header";

export default {
  component: RecipeHeader,
  title: "RecipeHeader",
};

const Template = (args) => <RecipeHeader {...args} />;

export const Header = Template.bind({});

Header.args = {
  mainImage: {
    crop: null,
    hotspot: null,
    asset: { _id: "image-cc55b81258e853881e4b03b43c98fbf18231465d-1280x1348-png" },
    alt: "Image from Pexels",
  },
  title: "This is a sample recipe",
  _rawExcerpt: [
    {
      _key: "d94d1b4ee865",
      _type: "block",
      children: [
        { _key: "12f31b4e3b1e", _type: "span", marks: [], text: "BLA BLA BLA Lorem ipsum " },
        { _key: "498154612985", _type: "span", marks: ["strong"], text: "dolor" },
        {
          _key: "f9e1dce1a8a5",
          _type: "span",
          marks: [],
          text:
            " sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean ",
        },
        { _key: "d1a68f70bf30", _type: "span", marks: ["em"], text: "massa" },
        { _key: "694233fe474a", _type: "span", marks: [], text: ". Cum sociis natoque pena" },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
};
