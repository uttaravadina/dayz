import React from 'react';
import '../Styles/SettingsMenu.css';
import { IoIosSettings } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const SettingsPopup = () => {

    return (
        <div className="settings-popup">
            <div className="settings-popup-module">
                <p>Account</p>
            </div>
            <div className="settings-popup-module">
                <p>Logout <FiLogOut style={{ marginLeft: '5px' }} /></p>
            </div>
        </div>
    );
};

class SettingsMenu extends React.Component {
    state = {
        showSettings: false,
    }

    changeSettings = () => {
        let curr = this.state.showSettings;
        this.setState({ showSettings: !curr })
    };

    render() {

        return (
            <>
                <div className="settings-menu">
                    <div className="settings-button" onClick={this.changeSettings}>
                        <IoIosSettings size='25px' />
                        <FaCaretDown size='17px' style={{marginTop: '4px'}} />
                    </div>
                    { this.state.showSettings ? <SettingsPopup /> : null }
                </div>
            </>
        );
    }
}

export default SettingsMenu;