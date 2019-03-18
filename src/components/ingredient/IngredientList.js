import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { fetchIngredients, reset } from "../../actions/ingredient/list";
import {
    LinkButton,
    UpdateButton,
    DeleteButton,
    BackButton,
    CreateButton
} from "../form";
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
                <ListGroup.Item key={id}>
                    <ButtonGroup className="d-flex justify-content-between">
                        <LinkButton link={`/ingredients/${id}`}>
                            {name}
                        </LinkButton>
                        <UpdateButton link={`/ingredients/update/${id}`} />
                        <DeleteButton link={`/ingredients/delete/${id}`} />
                    </ButtonGroup>
                </ListGroup.Item>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-10 col-lg-8">
                <h3 className="my-3 text-center">Ingredients</h3>
                <ListGroup className="mb-3">
                    {this.renderList()}
                    {isLoading && (
                        <ListGroup.Item>
                            <Spinner isLoading={isLoading} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
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
