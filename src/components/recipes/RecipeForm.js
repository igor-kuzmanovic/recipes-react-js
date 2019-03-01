import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';

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

    renderInput = ({ label, type, input, placeholder, meta } ) => {
        return (
            <Form.Group>
                <Form.Label>{label}</Form.Label>
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
        )
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
                <Field
                    type="text"
                    name="description"
                    placeholder="Enter a description"
                    component={this.renderInput}
                >
                    Description
                </Field>
                <Field
                    type="text"
                    name="ingredients"
                    placeholder="Choose the ingredients"
                    component={this.renderInput}
                >
                    Ingredients
                </Field>
                <Field
                    type="text"
                    name="category"
                    placeholder="Choose a category"
                    component={this.renderInput}
                >
                    Category
                </Field>
                <Field
                    type="text"
                    name="tags"
                    placeholder="Choose the tags"
                    component={this.renderInput}
                >
                    Tags
                </Field>
                <Field
                    type="text"
                    name="images"
                    placeholder="Choose an image"
                    component={this.renderInput}
                >
                    Image
                </Field>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.name = 'You must enter a title';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description'
    }

    if(!formValues.ingredients) {
        errors.ingredients = 'You must choose the ingredients'
    }

    if(!formValues.category) {
        errors.category = 'You must choose a category'
    }

    if(!formValues.tags) {
        errors.tags = 'You must choose the tags'
    }

    if(!formValues.image) {
        errors.image = 'You must choose an image'
    }

    return errors;
};

export default reduxForm({
    form: 'recipeForm',
    validate
})(RecipeForm);