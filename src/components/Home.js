import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { Button, CardDeck, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { fetchRecipes } from "../actions/recipe";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderList() {
        return this.props.recipes.map(recipe => {
            const { id, title, description, creationDate, image } = recipe;
            return (
                <Card key={id} className="text-center m-2">
                    <Card.Img variant="top" src={image} alt={description} />
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

    renderCreate() {
        return (
            <LinkContainer to={`/recipes/create`}>
                <div className="text-center">
                    <Button variant="primary" size="lg">
                        Create a recipe
                    </Button>
                </div>
            </LinkContainer>
        );
    }

    render() {
        return (
            <div>
                <CardDeck>{this.renderList()}</CardDeck>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipes: Object.values(state.recipes)
    };
};

const mapDispatchToProps = {
    fetchRecipes
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
