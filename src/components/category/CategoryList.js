import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import { fetchCategories, reset } from "../../actions/category/list";
import {
    LinkButton,
    UpdateButton,
    DeleteButton,
    BackButton,
    CreateButton
} from "../form";
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
                <ListGroup.Item key={id}>
                    <ButtonGroup className="d-flex justify-content-between">
                        <LinkButton link={`/categories/${id}`}>
                            {name}
                        </LinkButton>
                        <UpdateButton link={`/categories/update/${id}`} />
                        <DeleteButton link={`/categories/delete/${id}`} />
                    </ButtonGroup>
                </ListGroup.Item>
            );
        });
    }

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">Categories</h3>
                <ListGroup className="mb-3">
                    {this.renderList()}
                    {isLoading && (
                        <ListGroup.Item>
                            <Spinner isLoading={isLoading} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
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
