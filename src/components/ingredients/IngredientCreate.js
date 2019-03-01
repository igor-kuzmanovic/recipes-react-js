import React from 'react';
import { connect } from 'react-redux';
import { createIngredient } from '../../actions/ingredient';
import IngredientForm from './IngredientForm';

class IngredientCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createIngredient(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create an Ingredient</h3>
                <IngredientForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    createIngredient
}

export default connect(
    null,
    mapDispatchToProps
)(IngredientCreate);