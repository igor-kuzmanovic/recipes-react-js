import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { Button, CardDeck, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { fetchRecipes, reset } from "../actions/recipe/list";
import { serverURL } from "../constants/server";
import { CreateButton } from "./form";
import { ErrorAlert, Spinner } from "./misc";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            const { id, title, description, creationDate, image } = recipe;
            return (
                <Card key={id} className="text-center m-2">
                    <Card.Img
                        variant="top"
                        src={`${serverURL}\\${image.contentUrl}`}
                        alt={description}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <LinkContainer to={`/recipes/${id}`}>
                            <Button variant="info">Details</Button>
                        </LinkContainer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {moment(creationDate).fromNow()}
                    </Card.Footer>
                </Card>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">
                    Welcome <Spinner isLoading={isLoading} />
                </h3>
                <CardDeck>{this.renderList()}</CardDeck>
                <div className="text-center">
                    <CreateButton link="/recipes/create" />
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
)(Home);
