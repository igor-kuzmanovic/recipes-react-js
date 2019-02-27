import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import RecipeList from './recipes/RecipeList';
import IngredientList from './ingredients/IngredientList';
import CategoryList from './categories/CategoryList';
import TagList from './tags/TagList';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <div>
                            Home
                        </div>
                    </Route>
                    <Route path="/recipes" exact component={RecipeList} />
                    <Route path="/ingredients" exact component={IngredientList} />
                    <Route path="/categories" exact component={CategoryList} />
                    <Route path="/tags" exact component={TagList} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;