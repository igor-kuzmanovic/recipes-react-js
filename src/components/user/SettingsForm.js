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
    }
    if (!formValues.password) {
        errors.password = "You must enter a new password";
    }
    return errors;
};

export default reduxForm({
    form: "settingsForm",
    validate
})(SettingsForm);
