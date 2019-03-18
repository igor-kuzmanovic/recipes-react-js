import React from "react";
import { Route } from "react-router-dom";
import requireAdmin from "../components/hoc/requireAdmin";
import {
    TagList,
    TagShow,
    TagCreate,
    TagUpdate,
    TagDelete
} from "../components/tag";

export default [
    <Route path="/tags" component={requireAdmin(TagList)} exact key="list" />,
    <Route
        path="/tags/create"
        component={requireAdmin(TagCreate)}
        exact
        key="create"
    />,
    <Route
        path="/tags/:id"
        component={requireAdmin(TagShow)}
        exact
        key="show"
    />,
    <Route
        path="/tags/update/:id"
        component={requireAdmin(TagUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/tags/delete/:id"
        component={requireAdmin(TagDelete)}
        exact
        key="delete"
    />
];
