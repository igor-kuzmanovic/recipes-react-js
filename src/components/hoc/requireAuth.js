import React from "react";
import { connect } from "react-redux";
import Spinner from "../misc/Spinner";

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
            if (this.props.isLoggedIn) {
                return <ChildComponent {...this.props} />;
            }

            return <Spinner isLoading={true} />;
        }
    }

    const mapStateToProps = state => {
        return { isLoggedIn: state.auth.isLoggedIn };
    };

    return connect(mapStateToProps)(RequiresAuthentication);
};
