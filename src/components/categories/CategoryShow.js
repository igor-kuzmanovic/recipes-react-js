import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/category';

class CategoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.id);
    }

    render() {
        if (!this.props.category) {
            return <div>Loading...</div>
        }

        return (
            <h2>{this.props.category.name}</h2>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.categories[ownProps.match.params.id]
    }
};

const mapDispatchToProps = {
    fetchCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryShow);