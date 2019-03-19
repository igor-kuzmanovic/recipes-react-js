import React from "react";
import { Route } from "react-router-dom";
import requireAuth from "../components/hoc/requireAuth";
import { UserSettings } from "../components/user";

export default [
    <Route
        path="/settings"
        component={requireAuth(UserSettings)}
        exact
        key="settings"
    />
];
