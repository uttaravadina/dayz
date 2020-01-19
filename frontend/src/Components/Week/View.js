import React from 'react';
import '../../Styles/Week/View.css';

const WeekModule = ({ day, date, isToday, color, titleText }) => {
    let todayActive = isToday ? "today-active" : "today-inactive";
    
    return (
        <div 
            className="week-module"
            title={titleText}
        >
            <h3>{day}</h3>
            <div className={todayActive}>
                <h2>{date}</h2>
            </div>
            <div style={{height: '10px'}}/>
            <div className="week-colorbox-container">
                <div className="week-colorbox"
                    style={{backgroundColor: color}}
                />
            </div>
            
        </div>
    )
};
    
class View extends React.Component {

    render() {
        const {dates} = this.props;
        let week = [];
        let days = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ];
        
        if (dates.length) {
            for (let i = 0; i < 7; i++) {
                let today = new Date();
                let isToday = (dates[i].setHours(0,0,0,0) === today.setHours(0,0,0,0));

                let titleText = dates[i].getFullYear() + "-" 
                + (dates[i].getMonth() + 1).toString().padStart(2, '0') 
                + "-" + (dates[i].getDate()).toString().padStart(2, '0')

                week.push(
                    <WeekModule 
                        day={days[i]}
                        isToday={isToday}
                        date={dates[i].getDate()}
                        color="#D9D9D9"
                        key={i}
                        titleText = {titleText}
                    />
                )
            }
        }
        
        return (
            <>
                <div className="week">
                    {week}
                </div>
            </>
        );
    }
}

export default View;