import { combineReducers } from "redux";
 import cartReducer from "./cartReducer";
import displayProductReducer from "./displayProductReducer";

// import updateProductReducer from "./updateProductReducer";
// import deleteProductReducer from "./deleteProductReducer";

const rootReducer = combineReducers({
   cart: cartReducer,
    displayProducts:displayProductReducer,
    //  updateProduct: updateProductReducer,
    // deleteproduct:deleteProductReducer
});
export default rootReducer;
