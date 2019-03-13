import React from "react";
import { Route } from "react-router-dom";
import requireAuth from "../components/hoc/requireAuth";
import {
    CategoryList,
    CategoryShow,
    CategoryCreate,
    CategoryUpdate,
    CategoryDelete
} from "../components/category";

export default [
    <Route
        path="/categories"
        component={requireAuth(CategoryList)}
        exact
        key="list"
    />,
    <Route
        path="/categories/create"
        component={requireAuth(CategoryCreate)}
        exact
        key="create"
    />,
    <Route path="/categories/:id" component={CategoryShow} exact key="show" />,
    <Route
        path="/categories/update/:id"
        component={requireAuth(CategoryUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/categories/delete/:id"
        component={requireAuth(CategoryDelete)}
        exact
        key="delete"
    />
];
