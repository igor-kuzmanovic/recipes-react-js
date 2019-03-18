import jwt_decode from "jwt-decode";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {
        auth: {
            user: localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")) : null
        }
    },
    storeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
