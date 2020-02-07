import React from 'react';
import '../../Styles/Month/View.css';

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
            
            const moodToColor = ["#FF5757", "#FF66C5", "#CB6BE7", "#8C52FF", "#5171FF"];
            let color;
            if (map) {
                if (titleText in map) {
                    color = moodToColor[map[titleText]];
                }
                else {
                    color = "#D9D9D9";
                }
            }
            else {
                color = "#D9D9D9";
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
                        <h3>SUN</h3>
                        <h3>MON</h3>
                        <h3>TUE</h3>
                        <h3>WED</h3>
                        <h3>THU</h3>
                        <h3>FRI</h3>
                        <h3>SAT</h3>
                        { monthList }
                    </div>
                </div>
            </>
        );
    }
}

export default View;