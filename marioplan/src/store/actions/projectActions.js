export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Michael',
            authorLastName: 'Moreno',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE-PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};