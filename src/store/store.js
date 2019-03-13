import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {
        auth: { isLoggedIn: localStorage.getItem("token") ? true : false }
    },
    storeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
