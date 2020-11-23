import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase'
// import logoutReducer from "./logoutReducer"; */

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    project:projectReducer,
    
});
export default rootReducer;
