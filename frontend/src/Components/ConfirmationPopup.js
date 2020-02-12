import React from 'react';
import '../Styles/ConfirmationPopup.css';
import { IoIosClose } from 'react-icons/io';

class ConfirmationPopup extends React.Component {

    render() {
        const { message } = this.props;
        
        return (
            <>
                <div className="confirmation-container">
                    <div className="confirmation-content">
                        <div className="confirmation-text">
                            <h2>{message}</h2>
                        </div>
                        <div className="confirmation-close">
                            <IoIosClose/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ConfirmationPopup;