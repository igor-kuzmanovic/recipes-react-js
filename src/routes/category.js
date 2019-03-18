import React from "react";
import { Route } from "react-router-dom";
import requireAdmin from "../components/hoc/requireAdmin";
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
        component={requireAdmin(CategoryList)}
        exact
        key="list"
    />,
    <Route
        path="/categories/create"
        component={requireAdmin(CategoryCreate)}
        exact
        key="create"
    />,
    <Route path="/categories/:id" component={requireAdmin(CategoryShow)} exact key="show" />,
    <Route
        path="/categories/update/:id"
        component={requireAdmin(CategoryUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/categories/delete/:id"
        component={requireAdmin(CategoryDelete)}
        exact
        key="delete"
    />
];
