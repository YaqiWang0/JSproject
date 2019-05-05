"use strict";
(function IIFE() {
    const singleRecipe=document.querySelector('.recipe-list');
    const recipeDetail=document.querySelector('.recipe-detail');
    const addFormButton=document.querySelector('.open-add-screen');
    const addForm=document.querySelector('.add-frame');
    const toAddBuntton=document.querySelector('.to-add');
    const title=document.querySelector('.title');
    const ingredients=document.querySelector('.ingredients');
    const instructions=document.querySelector('.instructions');
    const recipeList=document.querySelector('.recipe-list');
    const recipeTitle=document.querySelector('.title');
    const statusField=document.querySelector('.add-status');
    let currentRecipes;

    const errors = {
        'network-error': 'Error talking to network',
        'need-title': 'Title is required',
        'title-exists': 'Recipe already exists',
        'need-ingredient':'Ingredients is required',
        'need-instructions':'Instructions is required',
        default: 'Unknown error'
    };

    if(toAddBuntton){
        toAddBuntton.disabled=!recipeTitle.value;
        recipeTitle.addEventListener('input',(e)=>{
            toAddBuntton.disabled=!e.target.value;
        })
    }
    singleRecipe.addEventListener('click',(e)=>{
        event.preventDefault();
        statusField.innerText='';
        if(e.target.dataset.title!==undefined){
            updateRecipes(e.target.dataset.title);
        }
    });

    addFormButton.addEventListener('click',()=>{
        event.preventDefault();
        statusField.innerText='';
        addForm.classList.remove('hide');
    });

    toAddBuntton.addEventListener('click',(e)=>{
        e.preventDefault();
        statusField.innerText='';
        addRecipe({
            title:title.value,
            ingredientsList:ingredients.value,
            instructions:instructions.value
        });

    });

    const resetAddForm=function () {
        addForm.classList.add('hide');
        title.value='';
        ingredients.value='';
        instructions.value='';
    };

    const updateRecipes=function (title) {
        fetch('/recipeDetail').catch(err=> {
                return Promise.reject({error: 'network-error', message: 'network issue'});
            }
        ).then(response=>{
            if(response.ok){
                return response.json();
            }
            return response.json().then(err=>Promise.reject(err));
        }).then(recipes=>{

                currentRecipes = recipes;
                const targetRecipe = recipes[title];
                recipeDetail.innerHTML = `<div><p class="recipe-detail-items-title">Title: </p>${targetRecipe.title}</div>
<div><p class="recipe-detail-items-title">Ingredients List: </p>${targetRecipe.ingredientsList}</div>
<div><p class="recipe-detail-items-title">Instruction: </p>${targetRecipe.instructions}</div>`;
                recipeDetail.classList.remove('hide');
                recipeDetail.classList.add('show');
        }).catch(err=>{
            statusField.innerText=err.message||errors.default;
        });
    };

    const addRecipe=function (recipe) {
        fetch('/addRecipts',{
            method:'POST',
            headers:new Headers({'content-type':'application/json'}),
            body:JSON.stringify({recipe}),
        }).catch(err=>{
            return Promise.reject({error:'network-error',message:'network issue'});
        }).then(
            response=>{
                if(response.ok){
                    resetAddForm();
                    return response.json();
                }
                return response.json().then(err=>Promise.reject(err));
            }
        ).then(recipes=>{
            recipeList.innerHTML=`${Object.values(recipes).map(recipe=>formatRecipe(recipe)).join('')}`
        }).catch(err=>{
            statusField.innerText=err.message||errors.default;
        });
    };

    const formatRecipe= function (recipe) {
        return `
      <li>
        <div class="recipe">
          <a href="http://localhost:3000/detailRecipt?title=${recipe.title}"><span class="recipe-title" data-title="${recipe.title}">
          ${recipe.title}</span></a>
        </div>
      </li>
    `;
    }
})();
