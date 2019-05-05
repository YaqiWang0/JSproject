
const recipeWeb= {

    homePage : function (content) {
        return `<DOCTYPE html>
 <html>
    <head>
     <link rel="stylesheet" href="stylesheet.css"/>
    </head>
    <body>
    ${content}
    </body>
    </html>`
    },

recipePage :function (recipes) {
    return this.homePage(`
<div class="whole">
<h1 class="whole-title">Emma's Recipes Website</h1>
 <div class='recipe-frame'>
  <div class='recipes'>
    <ul class="recipe-list">
    ${Object.values(recipes).map(this.formatRecipe).join('')}
    </ul>
    <a href="http://localhost:3000/addForm"><button class="open-add-screen" >New Recipe</button></a>
    </div>
    <div class="hide recipe-detail"></div>
    </div>
     <div class="hide add-frame">
        <div class="query-item"><div class="query-title">Title</div><input class="title"></div>
     <div class="query-item"><div class="query-title">Ingredients</div><input class="ingredients"></div>
        <div class="query-item"><div class="query-title">Instructions</div><input class="instructions"></div>
     <button class="to-add">Add</button>
</div>
<div class="add-status"></div>
    <script src="recipes.js"></script>
    `);
},

formatRecipe: function (recipe) {
    return `
      <li>
        <div class="recipe">
          <a href="http://localhost:3000/detailRecipt?title=${recipe.title}"><span class="recipe-title" data-title="${recipe.title}">
          ${recipe.title}</span></a>
        </div>
      </li>
    `;
},

addForm:function () {
        return`

<doctype html="">
 
    
     <link rel="stylesheet" href="stylesheet.css">
    
<div class="whole">
<h1 class="whole-title">Emma's Recipes Website</h1>
 <div class="add-frame">
<Form class="add-recipe" action="/addFormRecipts" method="post">
        <div class="query-item"><div class="query-title">Title</div><input required name="title" class="title"></div>
     <div class="query-item"><div class="query-title">Ingredients</div><input required name="ingredientsList" class="ingredients"></div>
        <div class="query-item"><div class="query-title">Instructions</div><input required name="instructions" class="instructions"></div>
  
      <button class="to-add" type="submit">Add</button>
        
</Form>
<a href="http://localhost:3000"><button class="to-add">HomePage</button></a>
</div>
</div>
    <script src="recipes.js"></script>
    
    
    </doctype>`
},

showDetails:function (targetRecipe) {
        return`
<doctype html="">
 
    
     <link rel="stylesheet" href="stylesheet.css">
    
    
    
<div class="whole">
<h1 class="whole-title">Emma's Recipes Website</h1>
 <div class="detail-frame">
  <div class="detail">
    <ul class="recipe-list">
      <li class="recipe-detail-items"><p class="recipe-detail-items-title">Title: </p>${targetRecipe.title}</li>
    <li class="recipe-detail-items"><p class="recipe-detail-items-title">Ingredients List: </p>${targetRecipe.ingredientsList}</li>
    <li class="recipe-detail-items"><p class="recipe-detail-items-title">Instructions:</p> ${targetRecipe.instructions}</li>
    </ul>
    <a href="http://localhost:3000"><button class="homepage">HomePage</button></a>
    </div>
    </div>
</div>
    <script src="recipes.js"></script>
    </doctype>
    


`
}


};

module.exports=recipeWeb;
