import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import { RecipeList, RecipeShow, RecipeCreate, RecipeUpdate, RecipeDelete } from './recipes';
import { IngredientList, IngredientShow, IngredientCreate, IngredientUpdate, IngredientDelete } from './ingredients';
import { CategoryList, CategoryShow, CategoryCreate, CategoryUpdate, CategoryDelete } from './categories';
import { TagList, TagShow, TagCreate, TagUpdate, TagDelete } from './tags';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/recipes" exact component={RecipeList} />
                    <Route path="/recipes/create" exact component={RecipeCreate} />
                    <Route path="/recipes/:id" exact component={RecipeShow} />
                    <Route path="/recipes/update/:id" exact component={RecipeUpdate} />
                    <Route path="/recipes/delete/:id" exact component={RecipeDelete} />

                    <Route path="/ingredients" exact component={IngredientList} />
                    <Route path="/ingredients/create" exact component={IngredientCreate} />
                    <Route path="/ingredients/:id" exact component={IngredientShow} />
                    <Route path="/ingredients/update/:id" exact component={IngredientUpdate} />
                    <Route path="/ingredients/delete/:id" exact component={IngredientDelete} />

                    <Route path="/categories" exact component={CategoryList} />
                    <Route path="/categories/create" exact component={CategoryCreate} />
                    <Route path="/categories/:id" exact component={CategoryShow} />
                    <Route path="/categories/update/:id" exact component={CategoryUpdate} />
                    <Route path="/categories/delete/:id" exact component={CategoryDelete} />

                    <Route path="/tags" exact component={TagList} />
                    <Route path="/tags/create" exact component={TagCreate} />
                    <Route path="/tags/:id" exact component={TagShow} />
                    <Route path="/tags/update/:id" exact component={TagUpdate} />
                    <Route path="/tags/delete/:id" exact component={TagDelete} />
                </Switch>
            </div>
        </div>
    )
};

export default App;