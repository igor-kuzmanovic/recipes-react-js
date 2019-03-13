import React from "react";
import { Route } from "react-router-dom";
import requireAuth from "../components/hoc/requireAuth";
import {
    IngredientList,
    IngredientShow,
    IngredientCreate,
    IngredientUpdate,
    IngredientDelete
} from "../components/ingredient";

export default [
    <Route
        path="/ingredients"
        component={requireAuth(IngredientList)}
        exact
        key="list"
    />,
    <Route
        path="/ingredients/create"
        component={requireAuth(IngredientCreate)}
        exact
        key="create"
    />,
    <Route
        path="/ingredients/:id"
        component={requireAuth(IngredientShow)}
        exact
        key="show"
    />,
    <Route
        path="/ingredients/update/:id"
        component={requireAuth(IngredientUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/ingredients/delete/:id"
        component={requireAuth(IngredientDelete)}
        exact
        key="delete"
    />
];
