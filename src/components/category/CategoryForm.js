import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class CategoryForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            );
        }
    }

    renderInput = ({ type, input, placeholder, meta }) => {
        return (
            <>
                <Form.Control
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    isValid={meta.touched && meta.valid}
                    isInvalid={meta.touched && meta.invalid}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Enter a name"
                        component={this.renderInput}
                    />
                </Form.Group>
                <div className="row mb-3">
                    <div className="col text-left">
                        <LinkContainer to="/categories" activeClassName="">
                            <Button variant="secondary">Back to list</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={this.props.isSubmitDisabled}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "You must enter a name";
    }
    return errors;
};

export default reduxForm({
    form: "categoryForm",
    validate
})(CategoryForm);
