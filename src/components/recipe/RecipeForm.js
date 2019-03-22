import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "react-bootstrap";
import {
    Input,
    SelectSingle,
    SelectMultiple,
    SubmitButton,
    BackButton
} from "../form";

class RecipeForm extends React.Component {
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Enter a title"
                    component={Input}
                />
                <Field
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter a description"
                    component={Input}
                />
                <Field
                    label="Ingredients"
                    name="ingredients"
                    component={SelectMultiple}
                    format={value => (value ? value : [])}
                >
                    {this.props.ingredients.map(ingredient => {
                        return (
                            <option key={ingredient.id} value={ingredient.id}>
                                {ingredient.name}
                            </option>
                        );
                    })}
                </Field>
                <Field
                    label="Category"
                    name="category"
                    placeholder="Select a category"
                    component={SelectSingle}
                >
                    {this.props.categories.map(category => {
                        return (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        );
                    })}
                </Field>
                <Field
                    label="Tags"
                    name="tags"
                    component={SelectMultiple}
                    format={value => (value ? value : [])}
                >
                    {this.props.tags.map(tag => {
                        return (
                            <option key={tag.id} value={tag.id}>
                                {tag.name}
                            </option>
                        );
                    })}
                </Field>
                <div className="row mb-3">
                    <div className="col text-left">
                        <BackButton link="/recipes" />
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
    if (!formValues.title) {
        errors.title = "You must enter a title";
    } else if (formValues.title.length > 100) {
        errors.title = "Title cannot be longer than 100 characters";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    } else if (formValues.description.length > 500) {
        errors.description = "Description cannot be longer than 500 characters";
    }
    if (!formValues.ingredients || !formValues.ingredients.length) {
        errors.ingredients = "You must select at least one ingredient";
    }
    if (!formValues.category) {
        errors.category = "You must select a category";
    }
    if (!formValues.tags || !formValues.tags.length) {
        errors.tags = "You must select at least one tag";
    }
    return errors;
};

export default reduxForm({
    form: "recipeForm",
    validate
})(RecipeForm);
