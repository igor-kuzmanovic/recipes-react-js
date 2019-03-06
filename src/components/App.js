import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import { recipeRoutes } from './routes/recipe'
import { ingredientRoutes } from './routes/ingredient'
import { categoryRoutes } from './routes/category'
import { tagRoutes } from './routes/tag'

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" component={Home} exact strict />
                    {recipeRoutes}
                    {ingredientRoutes}
                    {categoryRoutes}
                    {tagRoutes}
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        </div>
    )
};

export default App;