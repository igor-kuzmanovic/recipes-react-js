import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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

    renderInput = ({ type, input, placeholder, meta }) => {
        return (
            <>
                <Form.Control
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    isValid={meta.touched && meta.valid}
                    isInvalid={meta.touched && meta.invalid}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </>
        );
    };

    renderSingleSelect = ({ children, input, placeholder, meta }) => {
        return (
            <>
                <Form.Control
                    {...input}
                    isValid={meta.touched && meta.valid}
                    isInvalid={meta.touched && meta.invalid}
                    autoComplete="off"
                    as="select"
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {children}
                </Form.Control>
                {this.renderError(meta)}
            </>
        );
    };

    renderMultipleSelect = ({ children, input, meta }) => {
        return (
            <>
                <Form.Control
                    {...input}
                    isValid={meta.touched && meta.valid}
                    isInvalid={meta.touched && meta.invalid}
                    autoComplete="off"
                    as="select"
                    multiple
                >
                    {children}
                </Form.Control>
                {this.renderError(meta)}
            </>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Field
                        type="text"
                        name="title"
                        placeholder="Enter a title"
                        component={this.renderInput}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Field
                        type="text"
                        name="description"
                        placeholder="Enter a description"
                        component={this.renderInput}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ingredients</Form.Label>
                    <Field
                        name="ingredients"
                        component={this.renderMultipleSelect}
                        format={value => (value ? value : [])}
                    >
                        {this.props.ingredients.map(ingredient => {
                            return (
                                <option
                                    key={ingredient.id}
                                    value={ingredient.id}
                                >
                                    {ingredient.name}
                                </option>
                            );
                        })}
                    </Field>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Field
                        name="category"
                        placeholder="Select a category"
                        component={this.renderSingleSelect}
                    >
                        {this.props.categories.map(category => {
                            return (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
                    </Field>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tags</Form.Label>
                    <Field
                        name="tags"
                        component={this.renderMultipleSelect}
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
                </Form.Group>
                <div className="row">
                    <div className="col text-left">
                        <LinkContainer to="/recipes" activeClassName="">
                            <Button variant="secondary">Back to list</Button>
                        </LinkContainer>
                    </div>
                    <div className="col text-right">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={this.props.isSubmitDisabled}
                        >
                            Submit
                        </Button>
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
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
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
