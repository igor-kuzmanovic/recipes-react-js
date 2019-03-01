import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../../actions/ingredient';
import {Link} from "react-router-dom";
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class IngredientList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    renderList() {
        return this.props.ingredients.map(ingredient => {
            const { id, name } = ingredient;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/ingredients/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>
                        <ButtonGroup>
                            <LinkContainer to={`/ingredients/update/${id}`}>
                                <Button variant="primary" size="small">Update</Button>
                            </LinkContainer>
                            <LinkContainer to={`/ingredients/delete/${id}`}>
                                <Button variant="danger" size="small">Delete</Button>
                            </LinkContainer>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
    }

    renderCreate() {
        return (
            <LinkContainer to={`/ingredients/create`}>
                <Button variant="primary">Create Ingredient</Button>
            </LinkContainer>
        )
    }

    render() {
        return (
            <div>
                <h2>Ingredients</h2>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>{null}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
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