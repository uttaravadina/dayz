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
            <hr style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
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
                        <div className="settings-button-gear">
                            <IoIosSettings size='25px' />
                        </div>
                        <FaCaretDown size='17px' style={{marginTop: '4px'}} />
                    </div>
                    { this.state.showSettings ? <SettingsPopup /> : null }
                </div>
            </>
        );
    }
}

export default SettingsMenu;