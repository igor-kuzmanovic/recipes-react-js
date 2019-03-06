import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory, updateCategory } from '../../actions/category';
import CategoryForm from "./CategoryForm";

class CategoryUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateCategory(this.props.match.params.id, formValues);
    };

    render() {
        return (
            <div>
                <h3>Update a Category</h3>
                {this.props.loading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <CategoryForm initialValues={_.pick(this.props.category, 'name')} onSubmit={this.onSubmit} />
                <LinkContainer to=".">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        loading: state.categories.update.loading,
        category: state.categories.update[ownProps.match.params.id],
        error: state.categories.update.error
    };
};

const mapDispatchToProps = {
    fetchCategory,
    updateCategory
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryUpdate);