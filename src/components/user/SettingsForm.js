import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { Input, SubmitButton, BackButton } from "../form";

class SettingsForm extends React.Component {
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    label="Old Password"
                    name="oldPassword"
                    type="password"
                    placeholder="Enter your old password"
                    component={Input}
                />
                <Field
                    label="New Password"
                    name="password"
                    type="password"
                    placeholder="Enter a new password"
                    component={Input}
                />
                <Field
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your new password"
                    component={Input}
                />
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/tags" />
                    </div>
                    <div className="col text-right">
                        <SubmitButton disabled={this.props.isSubmitDisabled} />
                    </div>
                </div>
            </Form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.oldPassword) {
        errors.oldPassword = "You must enter your old password";
    } else if (formValues.oldPassword.length < 7) {
        errors.oldPassword = "Password must be at least 7 characters";
    } else if (formValues.oldPassword.length > 100) {
        errors.oldPassword = "Password cannot be longer than 100 characters";
    }
    if (!formValues.password) {
        errors.password = "You must enter a new password";
    } else if (formValues.password === formValues.oldPassword) {
        errors.password =
            "You new password can't be the same as your old password";
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
    form: "settingsForm",
    validate
})(SettingsForm);
