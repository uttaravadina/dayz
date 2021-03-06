import React from 'react';
import '../../Styles/Day/View.css';
import { MOOD_TO_HEX, WEEKDAYS, DEFAULT_GRAY } from '../../constants';

class View extends React.Component {
    
    render() {
        let { day, data } = this.props;
        let dayOfWeek, date, isToday, todayActive, titleText, color = DEFAULT_GRAY; 

        if (day) {
            dayOfWeek = WEEKDAYS[day.getDay()];
            date = day.getDate();
            let today = new Date();
            isToday = (day.setHours(0,0,0,0) === today.setHours(0,0,0,0));
            todayActive = isToday ? "day-today-active" : "day-today-inactive";
            titleText = day.toISOString().substr(0,10);
            if (data && data.mood !== -1) {
                color = MOOD_TO_HEX[data.mood];
            }
        }

        return (
            <>
                <div className="day-wrapper">
                    <div className="day-bar">
                        <h3>{ dayOfWeek }</h3>
                        <div className={todayActive}>
                            <h2>{ date }</h2>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="day-colorbox-wrapper">
                            <div 
                                className="day-colorbox"
                                title={ titleText }
                                style={{ backgroundColor: color }}
                            >
                            </div>
                            <div className="day-notes">
                                {/* notes are changing size of legend :(*/}
                                <div className="day-notes-good">
                                    <h3>THE GOOD <span role="img" aria-label="thumbs-up">👍</span></h3>
                                    <div className="day-notes-good-text">
                                        <p>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>
                                    </div>
                                </div>
                                <div className="day-notes-bad">
                                    <h3>THE BAD <span role="img" aria-label="thumbs-down">👎</span></h3>
                                    <div className="day-notes-bad-text">
                                        <p>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default View;