import React from 'react';
import '../Styles/Footer.css';
import { GoHeart, GoMarkGithub } from 'react-icons/go';
import { FaCode, FaTwitter, FaChevronDown } from 'react-icons/fa';

class Footer extends React.Component {

    render() {
        const { clickFunction } = this.props;
        
        return (
            <>
                <div className="footer">
                    <div className="footer-copyright">
                        <h2>Coded with <GoHeart /> by Karen</h2>
                        <h4>Copyright © 2020</h4>
                    </div>
                    <div className="footer-links">
                        <div className="footer-link">
                            <h2>About</h2>
                        </div>
                        <div className="footer-link">
                            <a href="mailto:karenying7@gmail.com">
                                <h2>Contact</h2>
                            </a>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <div title="View source code">
                            <a href="https://github.com/karenying/dayz">
                                <FaCode style={{marginRight: '10px', marginLeft: '10px'}} />
                            </a>
                        </div>
                        <div title="Github"> 
                            <a href="https://github.com/karenying">
                                <GoMarkGithub style={{marginRight: '10px', marginLeft: '10px'}} />
                            </a>
                        </div>
                        <div title="Twitter">
                            <a href="https://twitter.com/karen_ying_">
                                <FaTwitter style={{marginRight: '10px', marginLeft: '10px'}} />
                            </a>
                        </div>
                        
                    </div>
                    <div className="footer-down" onClick={ clickFunction }>
                        <FaChevronDown size='25px' style={{marginTop: '-10px'}} title="Hide footer"/>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;