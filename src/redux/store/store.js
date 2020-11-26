import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  rootReducer,
  composeWithDevTools(
    
      applyMiddleware(thunk, logger),

  )
);

export default store;
