import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe';
import RecipeForm from './RecipeForm';

class RecipeCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createRecipe(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create an Recipe</h3>
                <RecipeForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    createRecipe
}

export default connect(
    null,
    mapDispatchToProps
)(RecipeCreate);