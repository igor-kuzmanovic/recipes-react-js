import React from "react";
import { Form } from "react-bootstrap";
import InputError from "../form/InputError";

const Input = ({ label, input, type, placeholder, meta }) => {
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
            <InputError {...meta} />
        </Form.Group>
    );
};

export default Input;
