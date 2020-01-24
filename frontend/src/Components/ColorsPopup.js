import React from 'react';
import '../Styles/ColorsPopup.css';
import { IoIosClose } from "react-icons/io";


const PopupModule = ({color, mood}) => {
    return (
        <div className="popup-module">
            <div className="popup-module-colorbox-container">
                <div 
                    className="popup-module-colorbox"
                    style={{backgroundColor: color}}>
                </div>
            </div>
            <div className="popup-module-text">
                <p>{mood} day</p>
            </div>
        </div>
    )

}

class ColorsPopup extends React.Component {

    render() {
        
        return (
            <>
                <div
                    className="popup-container"
                    onclick={this.props.closePopup}
                >
                    <div className="popup-close-container" style={{textAlign: 'right'}}>
                        <div className="popup-close" style={{paddingTop: '8px', paddingRight: '8px'}}>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                }}/>
                        </div>
                        
                    </div>
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>RATE YOUR DAY</h3>
                        </div>
                        <hr style={{marginTop: '5px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px'}}/>
                        <PopupModule color="#5171FF" mood="Great"/>
                        <PopupModule color="#8C52FF" mood="Good"/>
                        <PopupModule color="#CB6BE7" mood="Normal"/>
                        <PopupModule color="#FF66C5" mood="Off"/>
                        <PopupModule color="#FF5757" mood="Bad"/>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default ColorsPopup;