import React from "react";
import { Route } from "react-router-dom";
import {
    IngredientList,
    IngredientShow,
    IngredientCreate,
    IngredientUpdate,
    IngredientDelete
} from "../components/ingredient";

export default [
    <Route path="/ingredients" component={IngredientList} exact key="list" />,
    <Route
        path="/ingredients/create"
        component={IngredientCreate}
        exact
        key="create"
    />,
    <Route
        path="/ingredients/:id"
        component={IngredientShow}
        exact
        key="show"
    />,
    <Route
        path="/ingredients/update/:id"
        component={IngredientUpdate}
        exact
        key="update"
    />,
    <Route
        path="/ingredients/delete/:id"
        component={IngredientDelete}
        exact
        key="delete"
    />
];
