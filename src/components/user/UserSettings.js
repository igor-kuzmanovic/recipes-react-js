import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateUser, reset } from "../../actions/user/update";
import SettingsForm from "./SettingsForm";
import ErrorAlert from "../misc/ErrorAlert";

class UserSettings extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateUser(formValues);
    };

    render() {
        const { updated, isLoading, error } = this.props;

        if (updated) {
            return <Redirect to="/" />;
        }

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">User Settings</h3>
                <SettingsForm
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
        isLoading: state.users.isLoading,
        error: state.users.error,
        updated: state.users.updated
    };
};

const mapDispatchToProps = {
    updateUser,
    reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSettings);
