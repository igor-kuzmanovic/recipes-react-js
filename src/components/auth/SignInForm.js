import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { Input, SubmitButton } from "../form";

class SignInForm extends React.Component {
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    component={Input}
                />
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    component={Input}
                />
                <div className="text-center my-4">
                    <SubmitButton disabled={this.props.isSubmitDisabled} />
                </div>
            </Form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
        errors.email = "You must enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
        errors.email = "Email is not in the valid format";
    } else if (formValues.email.length > 180) {
        errors.email = "Email cannot be longer than 180 characters";
    }
    if (!formValues.password) {
        errors.password = "You must enter a password";
    } else if (formValues.password.length < 7) {
        errors.password = "Password must be at least 7 characters";
    } else if (formValues.password.length > 100) {
        errors.password = "Password cannot be longer than 100 characters";
    }
    return errors;
};

export default reduxForm({
    form: "signInForm",
    validate
})(SignInForm);
