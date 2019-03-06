import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, updateRecipe } from '../../actions/recipe';
import RecipeForm from "./RecipeForm";

class RecipeUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateRecipe(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.recipe) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Update a Recipe</h3>
                <RecipeForm initialValues={_.pick(this.props.recipe, 'title', 'description', 'ingredients', 'category', 'tags', 'image')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        recipe: state.recipes[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchRecipe,
    updateRecipe
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeUpdate);