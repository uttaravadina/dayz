import React from 'react';
import '../Styles/RatePopup.css';
import { IoIosClose } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';
import { postDay } from '../Axios/axios_getter';
import { MOOD_TO_NUM, WEEKDAYS } from '../constants';

const RateModule = ({ color, mood, date, close, updateMap}) => {

    async function submitDay(e) {
        updateMap(date, MOOD_TO_NUM[mood]);
        await postDay(date, MOOD_TO_NUM[mood], [], []);
        close();
    }
    
    return (
        <div className="rate-module" onClick={ submitDay }>
            <div className="rate-module-colorbox-container">
                <div className="rate-module-colorbox" style={{ backgroundColor: color }}>
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
        const { date, closePopup, updateMap } = this.props;
        let d = new Date(date + 'T00:00');
        let title = WEEKDAYS[d.getDay()] + ', ' + (d.getMonth() + 1)  + '/' + parseInt(d.getDate(), 10);

        return (
            <>
                <div className="rate-container">
                    <div className="rate-close-container" style={{ textAlign: 'right' }}>
                        <div 
                            className="rate-close" 
                        >   
                            <h3 style={{paddingLeft: '20px'}}>{title}</h3>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '8px'
                                }}
                                title={ "close" }
                                onClick={ closePopup }
                            /> 
                        </div>
                    </div>
                    <div className="rate-content">
                        {/*
                        <div className="rate-header">
                            <h3>ADD RATING</h3>
                        </div>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        */}
                        <RateModule color="#5171FF" mood="Great" date={ date } close={ closePopup } updateMap={updateMap} />
                        <RateModule color="#8C52FF" mood="Good" date={ date } close={ closePopup } updateMap={updateMap} />
                        <RateModule color="#CB6BE7" mood="Normal" date={ date } close={ closePopup } updateMap={updateMap} />
                        <RateModule color="#FF66C5" mood="Off" date={ date } close={ closePopup } updateMap={updateMap} />
                        <RateModule color="#FF5757" mood="Bad" date={ date } close={ closePopup } updateMap={updateMap} />
                        <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }} />
                        <div className="rate-notes">
                            <p><IoIosAdd size='25px' style={{ marginBottom: '4px' }}/>ADD NOTES</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RatePopup;