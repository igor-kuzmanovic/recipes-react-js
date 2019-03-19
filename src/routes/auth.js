import React from "react";
import { Route } from "react-router-dom";
import { requireAuth, requireNoAuth } from "../components/hoc";
import {
    SignUp,
    ConfirmRegistration,
    SignIn,
    SignOut,
    ResetPassword,
    NewPassword
} from "../components/auth";

export default [
    <Route
        path="/register"
        component={requireNoAuth(SignUp)}
        exact
        key="signup"
    />,
    <Route
        path="/confirm_registration"
        component={requireNoAuth(ConfirmRegistration)}
        exact
        key="confirmregistration"
    />,
    <Route
        path="/login"
        component={requireNoAuth(SignIn)}
        exact
        key="signin"
    />,
    <Route
        path="/logout"
        component={requireAuth(SignOut)}
        exact
        key="signout"
    />,
    <Route
        path="/reset_password"
        component={requireNoAuth(ResetPassword)}
        exact
        key="reset_password"
    />,
    <Route
        path="/new_password"
        component={requireNoAuth(NewPassword)}
        exact
        key="new_password"
    />
];
