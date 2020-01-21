import React from 'react';
import '../../Styles/Day/View.css';

class View extends React.Component {

    render() {
        let {day} = this.props;
        let days = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ];
        let dayOfWeek;
        let date;
        let isToday;
        let todayActive;
        let titleText;

        if (day) {
            dayOfWeek = days[day.getDay()];
            date = day.getDate();
            let today = new Date();
            isToday = (day.setHours(0,0,0,0) === today.setHours(0,0,0,0));
            todayActive = isToday ? "day-today-active" : "day-today-inactive"
            titleText = day.getFullYear() + "-" 
                + (day.getMonth() + 1).toString().padStart(2, '0') 
                + "-" + date.toString().padStart(2, '0');
        }
        
        return (
            <>
                <div className="day-wrapper">
                    <div className="day-bar">
                        <h3>{dayOfWeek}</h3>
                        <div className={todayActive}>
                            <h2>{date}</h2>
                        </div>
                    </div>
                    <div className="day-content">
                        <div className="day-colorbox-wrapper">
                            <div 
                                className="day-colorbox"
                                title={titleText}
                            >
                            </div>
                            <div className="day-notes">
                                {/* notes are changing size of legend :(*/}
                                <div className="day-notes-good">
                                    <h3>THE GOOD:</h3>
                                    <div className="day-notes-good-text">
                                        <p>
                                            • Saw Vic for first time in 45 days!!! <br/>
                                            • <br/>
                                            • 
                                        </p>
                                    </div>
                                </div>
                                <div className="day-notes-bad">
                                    <h3>THE BAD:</h3>
                                    <div className="day-notes-bad-text">
                                        <p>
                                            • Didn't sleep much on flight <br/>
                                            • <br/>
                                            • 
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