import React from 'react';
import '../Styles/RatePopup.css';
import { IoIosClose } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io'
import { postDay } from '../Axios/axios_getter';

const RateModule = ({ color, mood, date, username, close}) => {
    let moodToNum = {
        "Great": 4, 
        "Good": 3, 
        "Normal": 2,
        "Off": 1,
        "Bad": 0,
    }

    async function submitDay(e) {
        await postDay(date, moodToNum[mood], "karenying", [], []);
        close();
    }
    
    return (
        <div 
            className="rate-module"
            onClick={ submitDay }
        >
            <div className="rate-module-colorbox-container">
                <div 
                    className="rate-module-colorbox"
                    style={{ backgroundColor: color }}>
                        {/*<FiCheck color='white'/>*/}
                </div>
            </div>
            <div className="rate-module-text">
                <p>{ mood } day</p>
            </div>
        </div>
    )
}

class RatePopup extends React.Component {

    render() {

        return (
            <>
                <div className="rate-container">
                    <div className="rate-close-container" style={{ textAlign: 'right' }}>
                        <div className="rate-close" style={{ paddingTop: '8px', paddingRight: '8px' }}>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                                onClick={ this.props.closePopup }
                            /> 
                        </div>
                    </div>
                    <div className="rate-content">
                        <div className="rate-header">
                            <h3>RATE YOUR DAY</h3>
                        </div>
                            <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        <RateModule color="#5171FF" mood="Great" date={ this.props.date } close={ this.props.closePopup }/>
                        <RateModule color="#8C52FF" mood="Good" date={ this.props.date } close={ this.props.closePopup }/>
                        <RateModule color="#CB6BE7" mood="Normal" date={ this.props.date } close={ this.props.closePopup }/>
                        <RateModule color="#FF66C5" mood="Off" date={ this.props.date } close={ this.props.closePopup }/>
                        <RateModule color="#FF5757" mood="Bad" date={ this.props.date } close={ this.props.closePopup }/>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="rate-notes">
                            <p><IoIosAdd size='20px'/> ADD NOTES</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RatePopup;