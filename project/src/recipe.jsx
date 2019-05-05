import React from 'react';
import './stylesheet.css';
import RecipeList from './recipeList';

const Recipe=({recipes,selectRecipe,tryAddRecipe})=>{
    return(
        <div className='recipes'>
            <RecipeList recipes={recipes} selectRecipe={selectRecipe}/>

            <a href="http://localhost:4000/addForm">
                <button className="open-add-screen" onClick={(e)=>tryAddRecipe(e)}>New Recipe</button>
            </a>
        </div>
    )
};

export default Recipe;