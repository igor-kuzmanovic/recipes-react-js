import React from "react";
import { connect } from "react-redux";
import {
    confirmRegistration,
    reset
} from "../../actions/auth/confirmRegistration";
import ConfirmationForm from "./ConfirmationForm";
import { SuccessAlert, ErrorAlert } from "../misc";

class ConfirmRegistration extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    getInitialValues() {
        const queryParams = {};
        const search = this.props.location.search;
        if (search) {
            const searchParams = search.substring(1).split("&");
            searchParams.forEach(param => {
                const [key, value] = param.split("=");
                queryParams[key] = value;
            });
        }
        return queryParams;
    }

    onSubmit = formValues => {
        this.props.confirmRegistration(formValues, () =>
            this.props.history.push("/")
        );
    };

    render() {
        const { hasSignedUp, isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Confirm your registration</h3>
                <h4 className="text-center">Please check your email</h4>
                <ConfirmationForm
                    initialValues={this.getInitialValues()}
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <ErrorAlert error={error} />
                <SuccessAlert
                    isShown={hasSignedUp}
                    message="Successfully signed up"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
        hasSignedUp: state.auth.hasSignedUp
    };
};

const mapDispatchToProps = {
    confirmRegistration,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmRegistration);
