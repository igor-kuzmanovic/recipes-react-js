import React from "react";
import { Route } from "react-router-dom";
import {
    RecipeList,
    RecipeShow,
    RecipeCreate,
    RecipeUpdate,
    RecipeDelete
} from "../components/recipe";

export default [
    <Route path="/recipes" component={RecipeList} exact key="list" />,
    <Route
        path="/recipes/create"
        component={RecipeCreate}
        exact
        key="create"
    />,
    <Route path="/recipes/:id" component={RecipeShow} exact key="show" />,
    <Route
        path="/recipes/update/:id"
        component={RecipeUpdate}
        exact
        key="update"
    />,
    <Route
        path="/recipes/delete/:id"
        component={RecipeDelete}
        exact
        key="delete"
    />
];
