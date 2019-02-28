import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../../actions/ingredient';
import {Link} from "react-router-dom";

class IngredientList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    renderList() {
        return this.props.ingredients.map(ingredient => {
            const { id, name } = ingredient;
            return (
                <div className="item" key={id}>
                    <div className="right floated content">
                        <Link to={`/ingredients/update/${id}`} className="ui button primary">
                            Update
                        </Link>
                        <Link to={`/ingredients/delete/${id}`} className="ui button negative">
                            Delete
                        </Link>
                    </div>
                    <Link to={`/ingredients/${id}`} className="header">
                        {name}
                    </Link>
                </div>
            )
        })
    }

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/ingredients/create" className="ui button positive">
                    Create Ingredient
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Ingredients</h2>
                <div className="ui big relaxed divided list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: Object.values(state.ingredients)
    }
};

const mapDispatchToProps = {
    fetchIngredients
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientList);