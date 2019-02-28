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
                <div className="item" key={id}>
                    <div className="right floated content">
                        <Link to={`/recipes/update/${id}`} className="ui button primary">
                            Update
                        </Link>
                        <Link to={`/recipes/delete/${id}`} className="ui button negative">
                            Delete
                        </Link>
                    </div>
                    <img
                        className="ui avatar image"
                        src={image}
                        alt={description}
                    />
                    <div className="content">
                        <Link to={`/recipes/${id}`} className="header">
                            {title}
                        </Link>
                        <div className="description">
                            {description}
                            <br/>
                            <i>{moment(creationDate).format('LL')}</i>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/recipes/create" className="ui button positive">
                    Create Recipe
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <div className="ui large relaxed divided list">{this.renderList()}</div>
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