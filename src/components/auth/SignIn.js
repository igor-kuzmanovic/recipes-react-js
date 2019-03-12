import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { signIn, reset } from "../../actions/auth/signIn";
import AuthForm from "./AuthForm";
import { ErrorAlert, Spinner } from "../misc";

class SignIn extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.signIn(formValues, () => {
            this.props.history.push("/");
        });
    };

    render() {
        const { token, isLoading, error } = this.props;

        if (token) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h3 className="my-3 text-center">
                    Sign In <Spinner isLoading={isLoading} />
                </h3>
                <AuthForm
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
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = {
    signIn,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignIn));
