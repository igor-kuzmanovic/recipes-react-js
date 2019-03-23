import React from "react";
import { connect } from "react-redux";
import { updateUser, reset } from "../../actions/user/update";
import SettingsForm from "./SettingsForm";
import { SuccessAlert, ErrorAlert } from "../misc";

class UserSettings extends React.Component {
    componentWillUnmount() {
        this.props.reset();
    }

    onSubmit = formValues => {
        this.props.updateUser(formValues);
    };

    render() {
        const { hasUpdated, isLoading, error } = this.props;

        return (
            <div className="mx-auto col-md-6 col-lg-4">
                <h3 className="my-3 text-center">User Settings</h3>
                <SettingsForm
                    onSubmit={this.onSubmit}
                    isSubmitDisabled={isLoading}
                />
                <ErrorAlert error={error} />
                <SuccessAlert
                    isShown={hasUpdated}
                    message="Successfully updated your password"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.users.isLoading,
        error: state.users.error,
        hasUpdated: state.users.hasUpdated
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
