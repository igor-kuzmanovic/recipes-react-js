import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../actions/category';

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderList() {
        return this.props.categories.map(category => {
            const { id, name } = category;
            return (
                <div className="item" key={id}>
                    <div className="right floated content">
                        <Link to={`/categories/update/${id}`} className="ui button primary">
                            Update
                        </Link>
                        <Link to={`/categories/delete/${id}`} className="ui button negative">
                            Delete
                        </Link>
                    </div>
                    <Link to={`/categories/${id}`} className="header">
                        {name}
                    </Link>
                </div>
            )
        })
    }

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/categories/create" className="ui button positive">
                    Create Category
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <div className="ui big relaxed divided list">{this.renderList()}</div>
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