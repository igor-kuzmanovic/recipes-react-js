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
                <li key={id}>
                    <div>
                        <Link to={`/categories/${id}`}>
                            {name}
                        </Link>
                    </div>
                    <div>
                        <Link to={`/categories/update/${id}`}>
                            Update
                        </Link>
                        <Link to={`/categories/delete/${id}`}>
                            Delete
                        </Link>
                    </div>
                </li>
            )
        })
    }

    renderCreate() {
        return (
            <div>
                <Link to="/categories/create">
                    Create Category
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <ul>{this.renderList()}</ul>
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