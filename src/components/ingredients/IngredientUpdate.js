import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredient, updateIngredient } from '../../actions/ingredient';
import IngredientForm from "./IngredientForm";

class IngredientUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchIngredient(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateIngredient(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.ingredient) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Update a Ingredient</h3>
                <IngredientForm initialValues={_.pick(this.props.ingredient, 'name')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        ingredient: state.ingredients[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchIngredient,
    updateIngredient
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientUpdate);