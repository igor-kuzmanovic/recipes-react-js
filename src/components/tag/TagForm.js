import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import { Input, SubmitButton, BackButton } from "../form";

class TagForm extends React.Component {
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter a name"
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
    if (!formValues.name) {
        errors.name = "You must enter a name";
    } else if (formValues.name.length > 50) {
        errors.name = "Name cannot be longer than 50 characters";
    }
    return errors;
};

export default reduxForm({
    form: "tagForm",
    validate
})(TagForm);
