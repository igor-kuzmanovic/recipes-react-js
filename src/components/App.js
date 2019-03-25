import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import requireAuth from "./hoc/requireAuth";
import authRoutes from "../routes/auth";
import recipeRoutes from "../routes/recipe";
import ingredientRoutes from "../routes/ingredient";
import categoryRoutes from "../routes/category";
import tagRoutes from "../routes/tag";
import userRoutes from "../routes/user";

const App = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <Switch>
                    <Route path="/" component={requireAuth(Home)} exact />
                    {authRoutes}
                    {recipeRoutes}
                    {ingredientRoutes}
                    {categoryRoutes}
                    {tagRoutes}
                    {userRoutes}
                    <Route
                        render={() => (
                            <h1 className="text-center mt-5">
                                404: Page Not Found
                            </h1>
                        )}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default App;
