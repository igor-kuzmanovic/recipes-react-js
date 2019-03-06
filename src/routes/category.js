import React from 'react';
import { Route } from 'react-router-dom';
import { 
    CategoryList, 
    CategoryShow, 
    CategoryCreate, 
    CategoryUpdate, 
    CategoryDelete 
} from '../components/category';

export default [
    <Route path="/categories" component={CategoryList} exact key="list" />,
    <Route path="/categories/create" component={CategoryCreate} exact key="create" />,
    <Route path="/categories/:id" component={CategoryShow} exact key="show" />,
    <Route path="/categories/update/:id" component={CategoryUpdate} exact key="update" />,
    <Route path="/categories/delete/:id" component={CategoryDelete} exact key="delete" />
];