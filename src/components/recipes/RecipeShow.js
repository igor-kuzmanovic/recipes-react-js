import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe';

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    render() {
        if (!this.props.recipe) {
            return <div>Loading...</div>
        }

        return (
            <h2>{this.props.recipe.title}</h2>
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