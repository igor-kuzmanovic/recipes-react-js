import React from "react";
import { Route } from "react-router-dom";
import { requireAuth, requireAdmin } from "../components/hoc";
import {
    RecipeList,
    RecipeShow,
    RecipeCreate,
    RecipeUpdate,
    RecipeDelete
} from "../components/recipe";

export default [
    <Route
        path="/recipes"
        component={requireAuth(RecipeList)}
        exact
        key="list"
    />,
    <Route
        path="/recipes/create"
        component={requireAuth(RecipeCreate)}
        exact
        key="create"
    />,
    <Route
        path="/recipes/:id"
        component={requireAuth(RecipeShow)}
        exact
        key="show"
    />,
    <Route
        path="/recipes/update/:id"
        component={requireAdmin(RecipeUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/recipes/delete/:id"
        component={requireAdmin(RecipeDelete)}
        exact
        key="delete"
    />
];
