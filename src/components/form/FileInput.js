import React from "react";
import { Form } from "react-bootstrap";

const handleChange = handler => ({ target: { files } }) =>
    handler(files.length ? { file: files[0], name: files[0].name } : {});

const FileInput = ({
    label,
    input: { onChange, onBlur, value: omitValue, ...inputProps },
    ...props
}) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...inputProps}
                {...props}
                type="file"
                onChange={handleChange(onChange)}
                onBlur={handleChange(onBlur)}
            />
        </Form.Group>
    );
};

export default FileInput;
