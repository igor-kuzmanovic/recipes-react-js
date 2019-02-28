import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/recipe';
import {Link} from "react-router-dom";

class RecipeList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            const { id, title, description, image, creationDate } = recipe;
            return (
                <li key={id}>
                    <div>
                        <img
                            src={image}
                            alt={description}
                        />
                        <Link to={`/recipes/${id}`}>
                            {title}
                        </Link>
                        <div>
                            {description}
                            <br/>
                            <i>{moment(creationDate).format('LL')}</i>
                        </div>
                    </div>
                    <div>
                        <Link to={`/recipes/update/${id}`}>
                            Update
                        </Link>
                        <Link to={`/recipes/delete/${id}`}>
                            Delete
                        </Link>
                    </div>
                </li>
            )
        })
    }

    renderCreate() {
        return (
            <div>
                <Link to="/recipes/create">
                    Create Recipe
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <ul>{this.renderList()}</ul>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: Object.values(state.recipes)
    }
};

const mapDispatchToProps = {
    fetchRecipes
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);