import React from 'react';
import '../../Styles/Day/View.css';

class View extends React.Component {
    
    render() {
        let { day, data } = this.props;
        let days = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ];
        let dayOfWeek, date, isToday, todayActive, titleText, color; 
        const moodToColor = ["#FF5757", "#FF66C5", "#CB6BE7", "#8C52FF", "#5171FF"];

        if (day) {
            dayOfWeek = days[day.getDay()];
            date = day.getDate();
            let today = new Date();
            isToday = (day.setHours(0,0,0,0) === today.setHours(0,0,0,0));
            todayActive = isToday ? "day-today-active" : "day-today-inactive";
            titleText = day.toISOString().substr(0,10);
            if (data) {
                color = moodToColor[data.mood];
            }
            else {
                color = "#D9D9D9";
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
                                    <h3>THE GOOD 👍</h3>
                                    <div className="day-notes-good-text">
                                        <p>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                                            • Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>
                                    </div>
                                </div>
                                <div className="day-notes-bad">
                                    <h3>THE BAD 👎</h3>
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