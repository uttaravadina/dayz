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

        if (day) {
            dayOfWeek = days[day.getDay()];
            date = day.getDate();
            let today = new Date();
            isToday = (day.setHours(0,0,0,0) === today.setHours(0,0,0,0));
            todayActive = isToday ? "day-today-active" : "day-today-inactive"
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
                            <div className="day-colorbox">
                            </div>
                            <div className="day-notes">
                                <div className="day-notes-good">
                                    <h3>
                                        THE GOOD:
                                    </h3>
                                </div>
                                <div className="day-notes-bad">
                                    <h3>
                                        THE BAD:
                                    </h3>
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