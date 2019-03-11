import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonGroup, Table } from "react-bootstrap";
import { fetchCategories, reset } from "../../actions/category/list";
import { UpdateButton, DeleteButton, BackButton, CreateButton } from "../form";
import { ErrorAlert, Spinner } from "../misc";

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
                        <Link to={`/categories/${id}`}>{name}</Link>
                    </td>
                    <td className="p-0">
                        <ButtonGroup>
                            <UpdateButton link={`/categories/update/${id}`} />
                            <DeleteButton link={`/categories/delete/${id}`} />
                        </ButtonGroup>
                    </td>
                </tr>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">Categories</h3>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>{null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                        {isLoading && (
                            <tr>
                                <td colSpan="2">
                                    <Spinner isLoading={isLoading} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/" />
                    </div>
                    <div className="col text-right">
                        <CreateButton link="/categories/create" />
                    </div>
                </div>
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.categories.isLoading,
        error: state.categories.error,
        categories: Object.values(state.categories.items)
    };
};

const mapDispatchToProps = {
    fetchCategories,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);
