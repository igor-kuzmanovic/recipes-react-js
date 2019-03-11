import React from "react";
import { Form } from "react-bootstrap";
import InputError from "../form/InputError";

const SelectMultiple = ({ label, input, children, meta }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
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
            <InputError {...meta} />
        </Form.Group>
    );
};

export default SelectMultiple;
