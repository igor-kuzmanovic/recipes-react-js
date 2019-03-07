import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategory, updateCategory } from '../../actions/category';
import { reset } from '../../actions/category/update';
import CategoryForm from "./CategoryForm";

class CategoryUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateCategory(this.props.match.params.id, formValues);
        this.props.history.push('/categories');
    };

    render() {
        return (
            <div>
                {this.props.category && (
                    <h3>Update '{this.props.category.name}'</h3>
                )}
                {this.props.isLoading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}                
                {this.props.category && (
                    <CategoryForm initialValues={_.pick(this.props.category, 'name')} onSubmit={this.onSubmit} />
                )}
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
        error: state.categories.error,
        category: state.categories.items[ownProps.match.params.id],
    };
};

const mapDispatchToProps = {
    fetchCategory,
    updateCategory,
    reset
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CategoryUpdate));