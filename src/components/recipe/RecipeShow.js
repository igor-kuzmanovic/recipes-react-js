import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe';

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    renderIngredients() {
        if (!this.props.recipe.ingredients.length) {
            return <h5>No Ingredients available</h5>
        }

        return this.props.recipe.ingredients.map(ingredient => {
            return <h5 key={ingredient.name}> - {ingredient.name}</h5>;
        })
    };

    renderTags() {
        if (!this.props.recipe.tags.length) {
            return <h5>No Tags available</h5>
        }

        return this.props.recipe.tags.map(tag => {
            return <h5 key={tag.name}> - {tag.name}</h5>
        })
    };

    render() {
        if (!this.props.recipe) {
            return <div>Loading...</div>
        }

        const { recipe } = this.props;
        return (
            <div>
                <h2>{recipe.title}</h2>
                <h4>{recipe.description}</h4>
                <h4>Ingredients</h4>
                {this.renderIngredients()}
                <h4>{recipe.category.name}</h4>
                <h4>Tags</h4>
                {this.renderTags()}
                <h4>{moment(recipe.creationDate).format('MMMM Do YYYY, h:mm:ss a')}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        recipe: state.recipes[ownProps.match.params.id]
    }
};

const mapDispatchToProps = {
    fetchRecipe
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeShow);