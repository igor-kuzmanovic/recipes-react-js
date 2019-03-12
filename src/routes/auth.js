import React from "react";
import { Route } from "react-router-dom";
import { SignUp, SignIn, SignOut } from "../components/auth";

export default [
    <Route path="/register" component={SignUp} exact key="signup" />,
    <Route path="/login" component={SignIn} exact key="signin" />,
    <Route path="/logout" component={SignOut} exact key="signout" />
];
