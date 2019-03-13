import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonGroup, Table } from "react-bootstrap";
import { fetchIngredients, reset } from "../../actions/ingredient/list";
import { UpdateButton, DeleteButton, BackButton, CreateButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

class IngredientList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.ingredients.map(ingredient => {
            const { id, name } = ingredient;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/ingredients/${id}`}>{name}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <UpdateButton link={`/ingredients/update/${id}`} />
                            <DeleteButton link={`/ingredients/delete/${id}`} />
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
                <h3 className="my-3 text-center">Ingredients</h3>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
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
                        <CreateButton link="/ingredients/create" />
                    </div>
                </div>
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.ingredients.isLoading,
        error: state.ingredients.error,
        ingredients: Object.values(state.ingredients.items)
    };
};

const mapDispatchToProps = {
    fetchIngredients,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientList);
