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
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">
                    Logging out... <Spinner isLoading={true} />
                </h3>
            </div>
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
