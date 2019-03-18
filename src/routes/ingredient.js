import React from "react";
import { Route } from "react-router-dom";
import requireAdmin from "../components/hoc/requireAdmin";
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
        component={requireAdmin(IngredientList)}
        exact
        key="list"
    />,
    <Route
        path="/ingredients/create"
        component={requireAdmin(IngredientCreate)}
        exact
        key="create"
    />,
    <Route
        path="/ingredients/:id"
        component={requireAdmin(IngredientShow)}
        exact
        key="show"
    />,
    <Route
        path="/ingredients/update/:id"
        component={requireAdmin(IngredientUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/ingredients/delete/:id"
        component={requireAdmin(IngredientDelete)}
        exact
        key="delete"
    />
];
