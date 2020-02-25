import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';

class FooterIcon extends React.Component {

    render() {
        const { clickFunction } = this.props;

        return (
            <>
                <div className="footer-icon-container">
                    <div className="footer-icon-content" onClick={ clickFunction }>
                        <FaChevronUp size="25px" title="Show footer" style={{marginTop: "-30px"}}/>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterIcon;