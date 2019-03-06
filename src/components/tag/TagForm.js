import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';

class TagForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            );
        }
    }

    renderInput = ({ label, type, input, placeholder, meta } ) => {
        return (
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    isValid={meta.touched && meta.valid}
                    isInvalid={meta.touched && meta.invalid}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </Form.Group>
        )
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
        this.props.history.push('/tags');
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    component={this.renderInput}
                >
                    Name
                </Field>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You must enter a name';
    }

    return errors;
};

export default reduxForm({
    form: 'tagForm',
    validate
})(withRouter(TagForm));