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
    }
    if (!formValues.resetPasswordToken) {
        errors.resetPasswordToken = "You must enter your password reset token";
    }
    if (!formValues.password) {
        errors.password = "You must enter a new password";
    }
    return errors;
};

export default reduxForm({
    form: "newPasswordForm",
    validate
})(NewPasswordForm);
