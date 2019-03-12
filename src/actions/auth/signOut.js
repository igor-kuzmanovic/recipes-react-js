export const signOut = () => {
    localStorage.removeItem("token");
    return {
        type: AUTH_SUCCESS,
        payload: ""
    };
};
