import React from "react";
import { Form } from "react-bootstrap";
import InputError from "../form/InputError";

const SelectSingle = ({ label, input, placeholder, children, meta }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
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
            <InputError {...meta} />
        </Form.Group>
    );
};

export default SelectSingle;
