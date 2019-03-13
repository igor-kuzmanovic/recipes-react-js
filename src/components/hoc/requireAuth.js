import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
    class RequiresAuthentication extends React.Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/login");
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { isLoggedIn: state.auth.isLoggedIn };
    };

    return connect(mapStateToProps)(RequiresAuthentication);
};
