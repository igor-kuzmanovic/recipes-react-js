import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { fetchRecipes, reset } from "../../actions/recipe/list";
import {
    LinkButton,
    UpdateButton,
    DeleteButton,
    BackButton,
    CreateButton
} from "../form";
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
                <ListGroup.Item key={id}>
                    <ButtonGroup className="d-flex justify-content-between">
                        <LinkButton link={`/recipes/${id}`}>{title}</LinkButton>
                        {this.props.user.roles.includes("ROLE_ADMIN") && (
                            <>
                                <UpdateButton link={`/recipes/update/${id}`} />
                                <DeleteButton link={`/recipes/delete/${id}`} />
                            </>
                        )}
                    </ButtonGroup>
                </ListGroup.Item>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-10 col-lg-8">
                <h3 className="my-3 text-center">Recipes</h3>
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
        recipes: Object.values(state.recipes.items),
        user: state.auth.user
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
