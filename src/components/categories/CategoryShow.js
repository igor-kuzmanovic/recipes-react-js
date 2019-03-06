import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory } from '../../actions/category';

class CategoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                {this.props.loading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <h2>{this.props.category.name}</h2>
                <LinkContainer to=".">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.categories.show.loading,
        category: state.categories.show[ownProps.match.params.id],
        error: stat.categories.error
    }
};

const mapDispatchToProps = {
    fetchCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryShow);