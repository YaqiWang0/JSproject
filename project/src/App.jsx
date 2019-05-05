import React from 'react';
import './stylesheet.css';
import Recipe from "./recipe";
import RecipeDetail from "./recipeDetail";
import AddRecipe from "./addRecipe";
import Status from "./status";
import {getRecipes,addNewRecipe} from "./service";
class App extends React.Component {
    constructor(){
        super();
        this.state={
            errors : {
                'network-error': 'Error talking to network',
                'need-title': 'Title is required',
                'title-exists': 'Recipe already exists',
                'need-ingredient':'Ingredients is required',
                'need-instructions':'Instructions is required',
                default: 'Unknown error'
            },
            ifAddRecipeDisplay:'none',
            ifRecipeDetailDisplay:'none',

            targetRecipe:{
                title:'q',
                ingredientsList:'q',
                instructions:'q'
            },
            ifTitleDisabled:true,
            ifIngredientDisabled:true,
            ifInstructionsDisabled:true,
            recipes:{

            },

            titleToAdd:'',
            ingredientsListToAdd:'',
            instructionsToAdd:'',
            statusField:'',


        };
        getRecipes().then(recipes=>{
            this.setState({
                recipes:recipes,
            })
        }).catch(err=>{
                this.setState({
                    statusField:err.message||this.state.errors.default,
                }
                );
        });

         this.selectRecipe=this.selectRecipe.bind(this);
         this.tryAddRecipe=this.tryAddRecipe.bind(this);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeIngredients=this.onChangeIngredients.bind(this);
         this.onChangeInstructions=this.onChangeInstructions.bind(this);
        this.addRecipe=this.addRecipe.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(function () {

            getRecipes().then(recipes=>{
                let status=this.state.statusField;
                if(this.state.statusField==='network issue')
                    status='';
                this.setState({
                    recipes:recipes,
                    statusField:status
                })
            }).catch(err=>{
                this.setState({
                        statusField:err.message||this.state.errors.default,
                    }
                );
            });

        }.bind(this), 5000);
    }

    selectRecipe(e,recipe){
        e.preventDefault();
        this.setState(
            {
                targetRecipe:recipe,
                ifRecipeDetailDisplay:'flex',
                statusField:'',
            }
        )
    }

    tryAddRecipe(e){
        e.preventDefault();
        this.setState(
            {
                ifAddRecipeDisplay:'flex',
            }
        )
    }

    onChangeTitle(e){
            let disable=e.target.value==='';
            this.setState({
                titleToAdd:e.target.value,
                statusField:'',
                ifTitleDisabled:disable
            })
    }

    onChangeIngredients(e){
        let disable=e.target.value==='';
        this.setState({
            ingredientsListToAdd:e.target.value,
            statusField:'',
            ifIngredientDisabled:disable
        })
    }

    onChangeInstructions(e){
        let disable=e.target.value==='';
        this.setState({
            instructionsToAdd:e.target.value,
            statusField:'',
            ifInstructionsDisabled:disable
        })
    }

    addRecipe(e){
        e.preventDefault();
        const newRecipes=this.state.recipes;
        addNewRecipe({title:this.state.titleToAdd,ingredientsList: this.state.ingredientsListToAdd,instructions: this.state.instructionsToAdd}).then(response=>{
            if(response.ok){
                newRecipes[this.state.titleToAdd] = {title:this.state.titleToAdd,ingredientsList: this.state.ingredientsListToAdd,instructions: this.state.instructionsToAdd};
                this.setState({
                    recipes:newRecipes,
                    titleToAdd:'',
                    ingredientsListToAdd:'',
                    instructionsToAdd:'',
                    ifTitleDisabled:true,
                    ifIngredientDisabled:true,
                    ifInstructionsDisabled:true,
                    ifAddRecipeDisplay:'none'

                });

                return;
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        }).catch(
            err=>{
                this.setState({
                    statusField:err.error||this.state.errors.default,
                });
            }
        );

    }
    render() {
        return (

      <div className="frame">
                <h1 className="whole-title">Recipes Website</h1>
                <div className='recipe-frame'>
                    <Recipe recipes={this.state.recipes} selectRecipe={this.selectRecipe} tryAddRecipe={this.tryAddRecipe}/>
                    <RecipeDetail display={this.state.ifRecipeDetailDisplay} targetRecipe={this.state.targetRecipe} />
                </div>
                <AddRecipe display={this.state.ifAddRecipeDisplay} recipeToAdd={{title:this.state.titleToAdd,ingredientsList: this.state.ingredientsListToAdd,instructions: this.state.instructionsToAdd}} onChangeTitle={this.onChangeTitle} onChangeIngredients={this.onChangeIngredients} onChangeInstructions={this.onChangeInstructions} ifAddDisabled={this.state.ifIngredientDisabled||this.state.ifInstructionsDisabled||this.state.ifTitleDisabled} AddRecipe={this.addRecipe}/>
                <Status status={this.state.statusField}/>
           </div>

        );
    }
}

export default App;
