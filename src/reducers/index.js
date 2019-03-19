import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import recipeReducer from "./recipe";
import ingredientReducer from "./ingredient";
import categoryReducer from "./category";
import tagReducer from "./tag";
import userReducer from "./user";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    recipes: recipeReducer,
    ingredients: ingredientReducer,
    categories: categoryReducer,
    tags: tagReducer,
    users: userReducer
});
