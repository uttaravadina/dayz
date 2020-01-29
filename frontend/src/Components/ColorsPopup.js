import React from 'react';
import '../Styles/ColorsPopup.css';
import { IoIosClose } from 'react-icons/io';
import { postDay } from '../Axios/axios_getter';

const PopupModule = ({ color, mood, date, username, close}) => {
    let moodToNum = {
        "Great": 4, 
        "Good": 3, 
        "Normal": 2,
        "Off": 1,
        "Bad": 0
    }

    async function submitDay(e) {
        await postDay(date, moodToNum[mood], "karenying", [], []);
        close();
    }
    
    return (
        <div 
            className="popup-module"
            onClick={submitDay}
        >
            <div className="popup-module-colorbox-container">
                <div 
                    className="popup-module-colorbox"
                    style={{ backgroundColor: color }}>
                </div>
            </div>
            <div className="popup-module-text">
                <p>{ mood } day</p>
            </div>
        </div>
    )

}

class ColorsPopup extends React.Component {

    render() {

        return (
            <>
                <div className="popup-container">
                    <div className="popup-close-container" style={{ textAlign: 'right' }}>
                        <div className="popup-close" style={{ paddingTop: '8px', paddingRight: '8px' }}>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                }}
                                onClick={ this.props.closePopup }
                            /> 
                        </div>
                    </div>
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>RATE YOUR DAY</h3>
                        </div>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        <PopupModule color="#5171FF" mood="Great" date={ this.props.date } close={ this.props.closePopup }/>
                        <PopupModule color="#8C52FF" mood="Good" date={ this.props.date } close={ this.props.closePopup }/>
                        <PopupModule color="#CB6BE7" mood="Normal" date={ this.props.date } close={ this.props.closePopup }/>
                        <PopupModule color="#FF66C5" mood="Off" date={ this.props.date } close={ this.props.closePopup }/>
                        <PopupModule color="#FF5757" mood="Bad" date={ this.props.date } close={ this.props.closePopup }/>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default ColorsPopup;