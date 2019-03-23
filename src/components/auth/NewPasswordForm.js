import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { Input, SubmitButton } from "../form";

class NewPasswordForm extends React.Component {
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
                    label="Password Reset Token"
                    name="resetPasswordToken"
                    type="resetPasswordToken"
                    placeholder="Enter your password reset token"
                    component={Input}
                />
                <Field
                    label="New Password"
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    component={Input}
                />
                <Field
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your new password"
                    component={Input}
                />
                <div className="text-center mb-3">
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
    if (!formValues.resetPasswordToken) {
        errors.resetPasswordToken = "You must enter your password reset token";
    } else if (formValues.resetPasswordToken.length !== 30) {
        errors.resetPasswordToken =
            "Password reset token is not in the valid format";
    }
    if (!formValues.password) {
        errors.password = "You must enter a new password";
    } else if (formValues.password.length < 7) {
        errors.password = "Password must be at least 7 characters";
    } else if (formValues.password.length > 100) {
        errors.password = "Password cannot be longer than 100 characters";
    }
    if (!formValues.confirmPassword) {
        errors.confirmPassword = "You must confirm your new password";
    } else if (formValues.confirmPassword !== formValues.password) {
        errors.confirmPassword = "Passwords don't match";
    }
    return errors;
};

export default reduxForm({
    form: "newPasswordForm",
    validate
})(NewPasswordForm);
