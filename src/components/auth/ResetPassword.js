import React from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/auth/resetPassword";
import ResetPasswordForm from "./ResetPasswordForm";
import ErrorAlert from "../misc/ErrorAlert";

class ResetPassword extends React.Component {
    onSubmit = formValues => {
        this.props.resetPassword(formValues, () =>
            this.props.history.push("/new_password")
        );
    };

    render() {
        const { isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Reset your password</h3>
                <ResetPasswordForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <ErrorAlert error={error} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error
    };
};

const mapDispatchToProps = {
    resetPassword
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPassword);
