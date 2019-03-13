import React from "react";
import { Route } from "react-router-dom";
import requireAuth from "../components/hoc/requireAuth";
import {
    TagList,
    TagShow,
    TagCreate,
    TagUpdate,
    TagDelete
} from "../components/tag";

export default [
    <Route path="/tags" component={requireAuth(TagList)} exact key="list" />,
    <Route
        path="/tags/create"
        component={requireAuth(TagCreate)}
        exact
        key="create"
    />,
    <Route
        path="/tags/:id"
        component={requireAuth(TagShow)}
        exact
        key="show"
    />,
    <Route
        path="/tags/update/:id"
        component={requireAuth(TagUpdate)}
        exact
        key="update"
    />,
    <Route
        path="/tags/delete/:id"
        component={requireAuth(TagDelete)}
        exact
        key="delete"
    />
];
