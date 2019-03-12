import { AUTH_SUCCESS } from "../../constants/actionTypes";

export const signOut = () => {
    localStorage.removeItem("token");
    return {
        type: AUTH_SUCCESS,
        payload: ""
    };
};
