import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredient } from '../../actions/ingredient';

class IngredientShow extends React.Component {
    componentDidMount() {
        this.props.fetchIngredient(this.props.match.params.id);
    }

    render() {
        if (!this.props.ingredient) {
            return <div>Loading...</div>
        }

        return (
            <h2>{this.props.ingredient.name}</h2>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ingredient: state.ingredients[ownProps.match.params.id]
    }
};

const mapDispatchToProps = {
    fetchIngredient
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientShow);