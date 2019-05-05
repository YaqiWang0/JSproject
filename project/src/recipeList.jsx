import React from 'react';
import './stylesheet.css';
import SingleRecipe from "./singleRecipe";

const RecipeList=({recipes,selectRecipe})=>{
    return(
        <ul className="recipe-list">
           {
               Object.values(recipes).map(recipe=>{
                   return <SingleRecipe recipe={recipe} selectRecipe={selectRecipe}/>
               })
           }
        </ul>
    )
};

export default RecipeList;