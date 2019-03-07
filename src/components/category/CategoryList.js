import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategories, reset } from '../../actions/category/list';

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    componentWillUnmount() {
        this.props.reset();
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
                            <LinkContainer to={`/categories/delete/${id}`}>
                                <Button variant="danger" size="small">Delete</Button>
                            </LinkContainer>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                {this.props.isLoading && (
                    <p>Loading...</p>
                )}
                {this.props.error && (
                    <p>{this.props.error}</p>
                )}
                <Table responsive striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>{null}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.categories && (this.renderList())}
                    </tbody>
                </Table>       
                <LinkContainer to="..">
                    <Button variant="primary">Back to home</Button>
                </LinkContainer>
                <LinkContainer to={`/categories/create`}>
                    <Button variant="primary">Create Category</Button>
                </LinkContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        categories: Object.values(state.categories.items)
    }
};

const mapDispatchToProps = {
    fetchCategories,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);