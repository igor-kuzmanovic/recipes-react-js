import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import recipeReducer from "./recipeReducer";
import ingredientReducer from "./ingredientReducer";
import categoryReducer from "./categoryReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
    form: formReducer,
    recipe: recipeReducer,
    ingredient: ingredientReducer,
    category: categoryReducer,
    tag: tagReducer
})