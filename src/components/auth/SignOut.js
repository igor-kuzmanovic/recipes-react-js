import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth/signOut";
import { Spinner } from "../misc";

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut();
    }

    render() {
        return (
            <h3 className="my-3 text-center">
                Logging out... <Spinner isLoading={true} />
            </h3>
        );
    }
}

const mapDispatchToProps = {
    signOut
};

export default connect(
    null,
    mapDispatchToProps
)(SignOut);
