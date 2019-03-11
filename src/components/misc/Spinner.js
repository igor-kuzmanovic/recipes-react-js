import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({ isLoading }) => {
    if (isLoading) {
        return <FontAwesomeIcon icon={faSpinner} spin />;
    }

    return null;
};

export default Spinner;
