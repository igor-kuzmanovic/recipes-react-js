import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonGroup, Table } from "react-bootstrap";
import { fetchRecipes, reset } from "../../actions/recipe/list";
import { UpdateButton, DeleteButton, BackButton, CreateButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class RecipeList extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            const { id, title } = recipe;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/recipes/${id}`}>{title}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <UpdateButton link={`/recipes/update/${id}`} />
                            <DeleteButton link={`/recipes/delete/${id}`} />
                        </ButtonGroup>
                    </td>
                </tr>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">Recipes</h3>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                        {isLoading && (
                            <tr>
                                <td colSpan="2">
                                    <Spinner isLoading={isLoading} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/" />
                    </div>
                    <div className="col text-right">
                        <CreateButton link="/recipes/create" />
                    </div>
                </div>
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.recipes.isLoading,
        error: state.recipes.error,
        recipes: Object.values(state.recipes.items)
    };
};

const mapDispatchToProps = {
    fetchRecipes,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);
