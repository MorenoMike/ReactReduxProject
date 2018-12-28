const initState = {
    posts: [

        { id: '1', title: 'Squirtle laid and Egg', body: 'Corned beef flank alcatra turkey, ribeye tail landjaeger tongue. Pig biltong jowl turkey bacon. Ribeye chuck boudin, pork loin porchetta burgdoggen tri-tip flank. Shankle jowl prosciutto fatback salami, meatball filet mignon tri-tip venison ground round cupim t-bone. Drumstick pork belly biltong, prosciutto chicken burgdoggen cow landjaeger.' },
        { id: '2', title: 'Charmander laid an Egg', body: 'Corned beef flank alcatra turkey, ribeye tail landjaeger tongue. Pig biltong jowl turkey bacon. Ribeye chuck boudin, pork loin porchetta burgdoggen tri-tip flank. Shankle jowl prosciutto fatback salami, meatball filet mignon tri-tip venison ground round cupim t-bone. Drumstick pork belly biltong, prosciutto chicken burgdoggen cow landjaeger.' },
        { id: '3', title: 'A Helix Fossil was found', body: 'Corned beef flank alcatra turkey, ribeye tail landjaeger tongue. Pig biltong jowl turkey bacon. Ribeye chuck boudin, pork loin porchetta burgdoggen tri-tip flank. Shankle jowl prosciutto fatback salami, meatball filet mignon tri-tip venison ground round cupim t-bone. Drumstick pork belly biltong, prosciutto chicken burgdoggen cow landjaeger.' }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;