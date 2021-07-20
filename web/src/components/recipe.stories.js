import React from 'react';
import { DefaultContext } from 'react-icons/lib';

import Recipe from './recipe';

export default {
    component: Recipe,
    title: 'Recipe',
}

const Template = (args) => <Recipe {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    "mainImage":{"crop":null,"hotspot":null,"asset":{"_id":"image-cc55b81258e853881e4b03b43c98fbf18231465d-1280x1348-png"},"alt":"Image from Pexels"},
    "title":"This is a sample recipe","slug":{"current":"test"},
    "_rawExcerpt":[
        {"_key":"d94d1b4ee865","_type":"block","children":[{"_key":"12f31b4e3b1e","_type":"span","marks":[],"text":"BLA BLA BLA Lorem ipsum "},{"_key":"498154612985","_type":"span","marks":["strong"],"text":"dolor"},{"_key":"f9e1dce1a8a5","_type":"span","marks":[],"text":" sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean "},{"_key":"d1a68f70bf30","_type":"span","marks":["em"],"text":"massa"},{"_key":"694233fe474a","_type":"span","marks":[],"text":". Cum sociis natoque pena"}],"markDefs":[],"style":"normal"}
    ],
    "authors":[{"_key":"0e2efa4e6a62","author":{"image":{"crop":{"_key":null,"_type":"sanity.imageCrop","top":0,"bottom":0,"left":0,"right":0},"hotspot":{"_key":null,"_type":"sanity.imageHotspot","x":0.2399193548387093,"y":0.5667994558880687,"height":0.6417120093276327,"width":0.449596774193548},"asset":{"_id":"image-601ec1ad78c0c86575a82ef3a6f6442aa10a169a-1504x1000-png"}},"name":"My Name"}}],
    "recipeIngredients":[
        {"text":"1 tsp vanilla"},
        {"text":"1 cup milk"},{"text":"1 egg"}
    ],
    "recipeInstructions":[{"text":"Beat the egg"},{"text":"Add the milk"},{"text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras "}],
    "recipeNotes":["the first note","another note","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras "]
}

