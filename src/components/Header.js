import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                RecipesApp
            </Link>
            <div className="right menu">
                <NavLink to="/recipes" className="item">
                    Recipes
                </NavLink>
                <NavLink to="/ingredients" className="item">
                    Ingredients
                </NavLink>
                <NavLink to="/categories" className="item">
                    Categories
                </NavLink>
                <NavLink to="/tags" className="item">
                    Tags
                </NavLink>
            </div>
        </div>
    )
};

export default Header;