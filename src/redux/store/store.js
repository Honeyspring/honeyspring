import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware,compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig'
const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }), logger),
      reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig)
    )
  )
);

export default store;
