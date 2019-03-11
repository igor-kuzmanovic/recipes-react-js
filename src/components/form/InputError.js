import React from "react";
import Feedback from "react-bootstrap/Feedback";

const InputError = ({ touched, error }) => {
    if (touched && error) {
        return <Feedback type="invalid">{error}</Feedback>;
    }

    return null;
};

export default InputError;
