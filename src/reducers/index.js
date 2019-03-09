import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "./recipe";
import ingredientReducer from "./ingredient";
import categoryReducer from "./category";
import tagReducer from "./tag";

export default combineReducers({
    form: formReducer,
    recipes: recipeReducer,
    ingredients: ingredientReducer,
    categories: categoryReducer,
    tags: tagReducer
});
