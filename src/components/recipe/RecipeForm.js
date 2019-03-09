import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class RecipeForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            );
        }
    }

    renderInput = ({ children, type, input, placeholder, meta }) => {
        return (
            <Form.Group>
                <Form.Label>{children}</Form.Label>
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
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    type="text"
                    name="title"
                    placeholder="Enter a title"
                    component={this.renderInput}
                >
                    Title
                </Field>
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/recipes" activeClassName="">
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
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    return errors;
};

export default reduxForm({
    form: "recipeForm",
    validate
})(RecipeForm);
