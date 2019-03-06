import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        this.props.history.push('/categories');
    };

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
                    <h3>Update '{this.props.category.name}'</h3>
                )}
                {this.renderLoading()}
                {this.props.category && (
                    <CategoryForm initialValues={_.pick(this.props.category, 'name')} onSubmit={this.onSubmit} />
                )}
                {this.renderErrors()}
                <LinkContainer to="..">
                    <Button variant="primary">Back to list</Button>
                </LinkContainer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        isLoading: state.categories.isLoading,
        errors: Object.values(state.categories.errors),
        category: state.categories.items[ownProps.match.params.id],
    };
};

const mapDispatchToProps = {
    fetchCategory,
    updateCategory
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryUpdate));