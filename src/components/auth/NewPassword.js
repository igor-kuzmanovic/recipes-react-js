import React from "react";
import { connect } from "react-redux";
import { newPassword, reset } from "../../actions/auth/newPassword";
import NewPasswordForm from "./NewPasswordForm";
import { SuccessAlert, ErrorAlert } from "../misc";

class NewPassword extends React.Component {
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
        this.props.newPassword(formValues, () => this.props.history.push("/"));
    };

    render() {
        const { hasResetPassword, isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Create a new password</h3>
                <h4 className="text-center">Please check your email</h4>
                <NewPasswordForm
                    initialValues={this.getInitialValues()}
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <ErrorAlert error={error} />
                <SuccessAlert
                    isShown={hasResetPassword}
                    message="Password successfully reset"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
        hasResetPassword: state.auth.hasResetPassword
    };
};

const mapDispatchToProps = {
    newPassword,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPassword);
