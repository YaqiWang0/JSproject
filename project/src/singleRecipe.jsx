import React from 'react';
import './stylesheet.css';

const SingleRecipe=({recipe,selectRecipe})=>{
    return(
        <li>
            <div className="recipe">
                <a href="http://localhost:4000/detailRecipt?title={recipe.title}"><span className="recipe-title"  data-title="{recipe.title}" onClick={(e)=>selectRecipe(e,recipe)}>
          {recipe.title}</span></a>
            </div>
        </li>
    )
};

export default SingleRecipe;