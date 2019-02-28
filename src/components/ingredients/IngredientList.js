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
                <li key={id}>
                    <div>
                        <Link to={`/ingredients/${id}`}>
                            {name}
                        </Link>
                    </div>
                    <div >
                        <Link to={`/ingredients/update/${id}`}>
                            Update
                        </Link>
                        <Link to={`/ingredients/delete/${id}`}>
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
                <Link to="/ingredients/create">
                    Create Ingredient
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Ingredients</h2>
                <ul>{this.renderList()}</ul>
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