import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp, reset } from "../../actions/auth/signUp";
import AuthForm from "./AuthForm";
import ErrorAlert from "../misc/ErrorAlert";

class SignUp extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.signUp(formValues, () =>
            this.props.history.push("/confirm_registration")
        );
    };

    render() {
        const { isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Sign Up</h3>
                <AuthForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <h6 className="text-center">
                    Already have an account? <Link to="/login">Log In!</Link>
                </h6>
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
    signUp,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
