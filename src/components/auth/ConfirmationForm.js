import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { Input, SubmitButton } from "../form";

class ConfirmationForm extends React.Component {
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
                    label="Confirmation Token"
                    name="confirmationToken"
                    type="confirmationToken"
                    placeholder="Enter your confirmation token"
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
    if (!formValues.confirmationToken) {
        errors.confirmationToken = "You must enter your confirmation token";
    }
    return errors;
};

export default reduxForm({
    form: "confirmationForm",
    validate
})(ConfirmationForm);
