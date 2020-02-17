import React from 'react';
import '../../Styles/Month/View.css';
import { MOOD_TO_HEX, WEEKDAYS, DEFAULT_GRAY } from '../../constants';

const Day = ({ date, color, isToday, titleText }) => {
    let monthToday = isToday ? "month-today" : "month-notToday";
    
    return (
        <div 
            className="month-module"
            title={ titleText }
        >
            <div className={ monthToday }>
                <div className="month-colorbox" style={{ backgroundColor: color }}>
                    <h2>{ date }</h2>
                </div>
            </div>
        </div>
    )
}

class View extends React.Component {
    
    render() {

        const { map, numFill, lastDay, year, month } = this.props;
        let monthList = [];
       
        for (let i = 0; i < numFill; i++) {
            monthList.push(
                <Day
                    color="white"
                    key={ i }
                />
            );
        }

        let today = new Date();

        for (let i = 0; i < lastDay; i++) {
            let isToday = (i + 1 === today.getDate() 
                & month === today.getMonth() 
                    && year === today.getFullYear());

            let titleText = year + "-" 
                + (month + 1).toString().padStart(2, '0') 
                    + "-" + (i + 1).toString().padStart(2, '0');
            
            let color = DEFAULT_GRAY;
            if (map && titleText in map) {
                color = MOOD_TO_HEX[map[titleText]];
            }
            
            monthList.push(
                <Day
                    date={ i + 1 }
                    color={ color }
                    key={ numFill + i }
                    isToday={ isToday }
                    titleText={ titleText }
                />
            );
        }
        
        return (
            <>
                <div className="month-wrapper">
                    <div className="month-table">
                        { WEEKDAYS.map(day => <h3>{day}</h3>) }
                        { monthList }
                    </div>
                </div>
            </>
        );
    }
}

export default View;