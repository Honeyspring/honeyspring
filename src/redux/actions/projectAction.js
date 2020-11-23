import {
    SUBMIT_PROJECT_DATA,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAIL,
} from "../constants/constants";



export const submitProjectData = () => {
  return {
    type: SUBMIT_PROJECT_DATA,
  };
};
export const submitProjectSuccess = (projects) => {
  return {
    type: SUBMIT_PROJECT_SUCCESS,
    payload: projects,
  };
};
export const submitProjectError = (error) => {
  return {
    type: SUBMIT_PROJECT_FAIL,
    payload: error,
  };
};
/*action creator  that returns a function through thunk which allows side effects like async api calls
the app dispatch the user request to submit data which sets loading to true
on getting response from api it dispacth success thereby submitting data
if it doesnt get data it dispatch error   
                }*/
 export const createProject =( project) => {
  return (dispatch,{getFirebase,getFirestore}) => {
    dispatch(submitProjectData());
   
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorName: 'oyin',
      authorId: 1234,
      createdAt:new Date()
    })
   
      .then((response) => {
        const projects= response.data;
        dispatch(submitProjectSuccess(projects));
      })
      .catch((error) => {
       
      dispatch(submitProjectError(error),console.log(error));  
    
        });
  };
};
