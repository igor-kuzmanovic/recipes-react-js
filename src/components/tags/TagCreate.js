import React from 'react';
import { connect } from 'react-redux';
import { createTag } from '../../actions/tag';
import TagForm from './TagForm';

class TagCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createTag(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Tag</h3>
                <TagForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(
    null,
    { createTag }
)(TagCreate);