import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchRecipes, deleteRecipe } from '../../actions/recipe';

class RecipeList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    onDeleteClick(id) {
        if (window.confirm('Are you sure you want to delete this Recipe?')) {
            this.props.deleteRecipe(id)
        }
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            const { id, title } = recipe;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/recipes/${id}`}>
                            {title}
                        </Link>
                    </td>
                    <td>
                        <ButtonGroup>
                            <LinkContainer to={`/recipes/update/${id}`}>
                                <Button variant="primary" size="small">Update</Button>
                            </LinkContainer>
                            <Button onClick={() => this.onDeleteClick(id)} variant="danger" size="small">Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
    }

    renderCreate() {
        return (
            <LinkContainer to={`/recipes/create`}>
                <Button variant="primary">Create Recipe</Button>
            </LinkContainer>
        )
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Title</th>
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
        recipes: Object.values(state.recipes)
    }
};

const mapDispatchToProps = {
    fetchRecipes,
    deleteRecipe
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);