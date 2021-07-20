import React from 'react';

import RecipeMetric from './recipe-metric';

import { RiKnifeFill } from "react-icons/ri";

export default {
    component: RecipeMetric,
    title: 'RecipeMetric',
}

export const Test = () => <RecipeMetric Icon={RiKnifeFill} text="prep time" quantity="30 min" />;