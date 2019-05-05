import React from 'react';
import './stylesheet.css';

const AddRecipe=({display,recipeToAdd,onChangeTitle,onChangeIngredients,onChangeInstructions,ifAddDisabled,AddRecipe})=>{
    return(
        <div className="add-frame" style={{display:display}}>
            <div className="query-item">
                <div className="query-title">Title</div>
                <input className="title" value={recipeToAdd.title} onChange={(e)=>onChangeTitle(e)}/></div>
            <div className="query-item">
                <div className="query-title">Ingredients</div>
                <input className="ingredients" value={recipeToAdd.ingredientsList} onChange={(e)=>onChangeIngredients(e)}/></div>
            <div className="query-item">
                <div className="query-title">Instructions</div>
                <input className="instructions" value={recipeToAdd.instructions} onChange={(e)=>onChangeInstructions(e)}/></div>
            <button className="to-add" disabled={ifAddDisabled} onClick={(e)=>AddRecipe(e)}>Add</button>
        </div>
    )
};

export default AddRecipe;