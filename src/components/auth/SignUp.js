import React from "react";
import { connect } from "react-redux";
import { signUp, reset } from "../../actions/auth/signUp";
import AuthForm from "./AuthForm";
import { ErrorAlert, Spinner } from "../misc";

class SignUp extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.signUp(formValues, () => this.props.history.push("/"));
    };

    render() {
        const { isLoading, error } = this.props;

        return (
            <div>
                <h3 className="my-3 text-center">
                    Sign Up <Spinner isLoading={isLoading} />
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
