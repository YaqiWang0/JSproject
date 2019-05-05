const recipe={
    'emma':{
        title:'emma',
        ingredientsList:'ginger',
        instructions:'great'
    }
};

const addRecipe=function (newRecipe) {
    recipe[newRecipe.title]=newRecipe;
};
const recipes={recipe,
addRecipe};

module.exports=recipes;