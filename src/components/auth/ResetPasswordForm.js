import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { BackButton, Input, SubmitButton} from "../form";

class ResetPasswordForm extends React.Component {
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
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/login" />
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
    if (!formValues.email) {
        errors.email = "You must enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
        errors.email = "Email is not in the valid format";
    } else if (formValues.email.length > 180) {
        errors.email = "Email cannot be longer than 180 characters";
    }
    return errors;
};

export default reduxForm({
    form: "resetPasswordForm",
    validate
})(ResetPasswordForm);
