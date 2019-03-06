import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategories } from '../../actions/category/list';

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
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

    renderList() {
        if (!this.props.categories.length && !this.props.isLoading) {
            return (
                <tr>
                    <td colSpan="2">Sorry, no categories available!</td>
                </tr>
            )
        }

        return this.props.categories.map(category => {
            const { id, name } = category;
            return (
                <tr key={id}>
                    <td className="w-100">
                        <Link to={`/categories/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>
                        <ButtonGroup>
                            <LinkContainer to={`/categories/update/${id}`}>
                                <Button variant="primary" size="small">Update</Button>
                            </LinkContainer>
                            <LinkContainer to={`/categories/delete/${id}`}>
                                <Button variant="danger" size="small">Delete</Button>
                            </LinkContainer>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
    }

    renderCreate() {
        return (
            <LinkContainer to={`/categories/create`}>
                <Button variant="primary">Create Category</Button>
            </LinkContainer>
        )
    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>{null}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
                {this.renderLoading()}
                {this.renderErrors()}         
                <LinkContainer to="..">
                    <Button variant="primary">Back to home</Button>
                </LinkContainer>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        errors: Object.values(state.categories.errors),
        categories: Object.values(state.categories.items)
    }
};

const mapDispatchToProps = {
    fetchCategories
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);