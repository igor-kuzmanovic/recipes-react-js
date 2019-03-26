import React from "react";
import { Form } from "react-bootstrap";
import InputError from "../form/InputError";

const Textarea = ({ label, input, placeholder, meta }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...input}
                as="textarea"
                placeholder={placeholder}
                isValid={meta.touched && meta.valid}
                isInvalid={meta.touched && meta.invalid}
                autoComplete="off"
            />
            <InputError {...meta} />
        </Form.Group>
    );
};

export default Textarea;
