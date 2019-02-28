import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/" className="item">
                RecipesApp
            </Link>
            <div>
                <NavLink to="/recipes">
                    Recipes
                </NavLink>
                <NavLink to="/ingredients">
                    Ingredients
                </NavLink>
                <NavLink to="/categories">
                    Categories
                </NavLink>
                <NavLink to="/tags">
                    Tags
                </NavLink>
            </div>
        </div>
    )
};

export default Header;