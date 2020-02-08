import React from 'react';
import '../Styles/SettingsMenu.css';
import { Dropdown } from 'react-bootstrap';
import { IoIosSettings } from 'react-icons/io';

class SettingsMenu extends React.Component {

    render() {

        return (
            <>
                <div className="settings-menu">
                    <Dropdown
                        drop='down'
                        left
                    >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <IoIosSettings size='20px'/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
        );
    }
}

export default SettingsMenu;