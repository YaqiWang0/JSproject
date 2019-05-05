export const getMessages = () => {
    return  fetch('/messages/').then(response => {
        if(response.ok){
            return response.json();
        }
        return Promise.reject({ error: 'service-complaint', err: response.statusText });
    })
};

export const addMessages=(message)=>{
    return  fetch('/messages/', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(message)

    }).catch( err => Promise.reject({ error: 'service-error', err }) )


};

export const addUser=(user)=>{
    return fetch(`/chat?username=${user}`).then(
        response=>{
            if(response.ok){
                return response.json();
            }
            return Promise.reject({ error: 'service-complaint', err: response.statusText });
        }
)
};

export const logout=(username)=>{
    return  fetch('/logout/', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({username})

    }).catch( err => Promise.reject({ error: 'service-error', err }) )


};