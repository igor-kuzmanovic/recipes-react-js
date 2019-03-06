import React from 'react';
import { Route } from 'react-router-dom';
import { 
    TagList, 
    TagShow, 
    TagCreate, 
    TagUpdate, 
    TagDelete 
} from '../components/tag';

export default [
    <Route path="/tags" component={TagList} exact key="list" />,
    <Route path="/tags/create" component={TagCreate} exact key="create" />,
    <Route path="/tags/:id" component={TagShow} exact key="show" />,
    <Route path="/tags/update/:id" component={TagUpdate} exact key="update" />,
    <Route path="/tags/delete/:id" component={TagDelete} exact key="delete" />
];