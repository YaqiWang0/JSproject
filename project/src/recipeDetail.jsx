import React from 'react';
import './stylesheet.css';

const RecipeDetail=({targetRecipe,display})=>{
    return(
        <div className="recipe-detail" style={{display:display}}>
            <div className="recipe-items"><p className="recipe-detail-items-title">Title: </p>{targetRecipe.title}</div>
            <div className="recipe-items"><p className="recipe-detail-items-title">Ingredients List: </p>{targetRecipe.ingredientsList}</div>
            <div className="recipe-items"><p className="recipe-detail-items-title">Instruction: </p>{targetRecipe.instructions}</div>
        </div>
    )
};

export default RecipeDetail;