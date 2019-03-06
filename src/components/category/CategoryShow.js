import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory } from '../../actions/category/show';

class CategoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    renderLoading() {
        if (this.props.isLoading) {
            return <p>Loading...</p>
        }
    }

    renderErrors() {
        if (this.props.errors.length) {
            return <p>{this.props.errors}</p>
        }
    }

    render() {
        return (
            <div>
                {this.props.category && (
                    <h2>{this.props.category.name}</h2>
                )}
                {this.renderLoading()}
                {this.renderErrors()}
                <LinkContainer to=".">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        isLoading: state.categories.isLoading,
        errors: Object.values(state.categories.errors),
        category: state.categories.items[ownProps.match.params.id]
    }
};

const mapDispatchToProps = {
    fetchCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryShow);