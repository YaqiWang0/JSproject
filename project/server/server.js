const express=require('express');
const app=express();
const PORT=4000;
const recipePage=require('./recipe-web');
const recipes=require('./recipe');
app.use(express.static('../build'));



app.get('/',(req,res)=>{

        try{
            res.sendFile('../build/index.html');}
             catch{
                 app.use(express.static('./public'));
            res.send(recipePage.recipePage(recipes.recipe))};
        
});

app.get('/addForm',(req,res)=>{
    res.send(recipePage.addForm());
});
app.get('/detailRecipt',(req,res)=>{
    const title=req.query.title;
    res.send(recipePage.showDetails(recipes.recipe[title]));
});

app.post('/addFormRecipts/',express.urlencoded({extended: false}),(req,res)=>{
    const recipe=req.body;
    recipes.addRecipe(recipe);
    res.send(recipePage.recipePage(recipes.recipe));
});


app.get('/recipeList',(req,res)=>{
    res.json(recipes.recipe);
});


app.get('/recipeDetail',(req,res)=>{

    res.json(recipes.recipe);
});

app.post('/addRecipts',express.json(),(req,res)=>{
    const recipe=req.body;
    if(!(recipe&&recipe.title)){
        res.status(400).json({error:'need-title',message:`'title' property is required`});
        return;
    }
    if(!(recipe&&recipe.ingredientsList)){
        res.status(400).json({error:'need-ingredient',message:`'ingredient' property is required`});
        return;
    }
    if(!(recipe&&recipe.instructions)){
        res.status(400).json({error:'need-instructions',message:`'instructions' property is required`});
        return;
    }
    if(recipes.recipe[recipe.title]){
        res.status(409).json({error:'title-exists',message:`${recipe.title} already exist`});
        return;
    }
    recipes.addRecipe(recipe);
    res.status(200);
    res.json(recipes.recipe);
});


app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`));

