import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../../actions/auth/signOut";
import { Spinner } from "../misc";

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut();
    }

    render() {
        const { token } = this.props;

        if (!token) {
            return <Redirect to="/login" />;
        }

        return (
            <h3 className="my-3 text-center">
                Logging out... <Spinner isLoading={true} />
            </h3>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = {
    signOut
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOut);
