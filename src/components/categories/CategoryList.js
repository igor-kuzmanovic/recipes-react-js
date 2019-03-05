import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategories, deleteCategory } from '../../actions/category';

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    onDeleteClick(id) {
        if (window.confirm('Are you sure you want to delete this Category?')) {
            this.props.deleteCategory(id)
        }
    }

    renderList() {
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
                            <Button onClick={() => this.onDeleteClick(id)} variant="danger" size="small">Delete</Button>
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
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: Object.values(state.categories)
    }
};

const mapDispatchToProps = {
    fetchCategories,
    deleteCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);