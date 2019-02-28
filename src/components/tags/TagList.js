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
                <li key={id}>
                    <div>
                        <Link to={`/tags/${id}`}>
                            {name}
                        </Link>
                    </div>
                    <div>
                        <Link to={`/tags/update/${id}`}>
                            Update
                        </Link>
                        <Link to={`/tags/delete/${id}`}>
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
                <Link to="/tags/create">
                    Create Tag
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Tags</h2>
                <ul>{this.renderList()}</ul>
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