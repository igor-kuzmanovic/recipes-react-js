import { SIGNOUT } from "../../constants/actionTypes";

export const signOut = () => {
    localStorage.removeItem("token");
    return {
        type: SIGNOUT,
        payload: false
    };
};
