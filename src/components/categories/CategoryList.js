import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../actions/category';
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
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
    fetchCategories
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);