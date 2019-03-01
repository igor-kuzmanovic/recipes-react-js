import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchTag, updateTag } from '../../actions/tag';
import TagForm from "./TagForm";

class TagUpdate extends React.Component {
    componentDidMount() {
        this.props.fetchTag(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateTag(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.tag) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Update a Tag</h3>
                <TagForm initialValues={_.pick(this.props.tag, 'name')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        tag: state.tags[ownProps.match.params.id]
    };
};

const mapDispatchToProps = {
    fetchTag,
    updateTag
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagUpdate);