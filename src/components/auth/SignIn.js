import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, reset } from "../../actions/auth/signIn";
import AuthForm from "./AuthForm";
import ErrorAlert from "../misc/ErrorAlert";

class SignIn extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.signIn(formValues, () => this.props.history.push("/"));
    };

    render() {
        const { isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">Log In</h3>
                <AuthForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <h6 className="text-center">
                    Don't have an account? <Link to="/register">Sign Up!</Link>
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
    signIn,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
