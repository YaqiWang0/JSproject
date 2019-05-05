export const getRecipes=()=> {
   return  fetch('/recipeList/').catch(err=> {
            return Promise.reject({error: 'network-error', message: 'network issue'});
        }
    ).then(response=>{
        if(response.ok){
            return response.json();
        }
        return response.json().then(err=>Promise.reject(err));
    })
};

export const addNewRecipe=(recipe)=>{
    return  fetch('/addRecipts/', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(recipe)

    }).catch( err => Promise.reject({ error: 'service-error', err }) )

};