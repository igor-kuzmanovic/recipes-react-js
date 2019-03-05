import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Button, CardDeck, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchRecipes } from '../actions/recipe';

class Home extends React.Component{
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
                            <Button variant="primary">Details</Button>
                        </LinkContainer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <small>{moment(creationDate).fromNow()}</small>
                    </Card.Footer>
                </Card>
            )
        })
    }

    renderCreate() {
        return (
            <LinkContainer to={`/recipes/create`}>
                <Button variant="primary" size="lg">Create Recipe</Button>
            </LinkContainer>
        )
    }

    render() {
        return (
            <div>
                <div className="text-center mt-3 mb-1">
                    {this.renderCreate()}
                </div>
                <CardDeck>
                    {this.renderList()}
                </CardDeck>
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
    fetchRecipes
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);