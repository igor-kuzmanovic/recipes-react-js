import React from "react";
import { connect } from "react-redux";
import { ROLE_ADMIN } from "../../constants/auth";
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
            if (!this.props.user || !this.props.user.roles.includes(ROLE_ADMIN)) {
                this.props.history.push("/");
            }
        }

        render() {
            if (this.props.user && this.props.user.roles.includes(ROLE_ADMIN)) {
                return <ChildComponent {...this.props} />;
            }

            return <Spinner isLoading={true} />;
        }
    }

    const mapStateToProps = state => {
        return { user: state.auth.user };
    };

    return connect(mapStateToProps)(RequiresAuthentication);
};
