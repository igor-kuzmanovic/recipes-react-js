import React from 'react';
import { connect } from 'react-redux';
import { fetchTag } from '../../actions/tag';

class TagShow extends React.Component {
    componentDidMount() {
        this.props.fetchTag(this.props.match.params.id);
    }

    render() {
        if (!this.props.tag) {
            return <div>Loading...</div>
        }

        return (
            <h2>{this.props.tag.name}</h2>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tag: state.tags[ownProps.match.params.id]
    }
};

const mapDispatchToProps = {
    fetchTag
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagShow);