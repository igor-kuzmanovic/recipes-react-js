import React from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../../actions/tag';
import {Link} from "react-router-dom";

class TagList extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    renderList() {
        return this.props.tags.map(tag => {
            const { id, name } = tag;
            return (
                <div className="item" key={id}>
                    <div className="right floated content">
                        <Link to={`/tags/update/${id}`} className="ui button primary">
                            Update
                        </Link>
                        <Link to={`/tags/delete/${id}`} className="ui button negative">
                            Delete
                        </Link>
                    </div>
                    <Link to={`/tags/${id}`} className="header">
                        {name}
                    </Link>
                </div>
            )
        })
    }

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/tags/create" className="ui button positive">
                    Create Tag
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Tags</h2>
                <div className="ui big relaxed divided list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tags: Object.values(state.tags)
    }
};

const mapDispatchToProps = {
    fetchTags
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);