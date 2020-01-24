import React from 'react';
import '../../Styles/Year/View.css';

const Day = ({color, isToday, titleText}) => {
    let yearToday = isToday ? "year-today" : "year-notToday";
    
    return (
        <div 
            className="year-module"
            title={titleText}
        >
            <div className={yearToday}>
                <div className="year-colorbox"
                    style={{backgroundColor: color}}
                >
                </div>
            </div>
        </div>
    )
}

class View extends React.Component {
    
    render() {
        const {year} = this.props;
        let yearList = [];
        let firstDay = new Date(year, 0, 1);
        let numFill = firstDay.getDay();

        yearList.push(
            <Day
                color="white"
                key={0}
            />,
            <h3 key={1}>MON</h3>,
            <Day
                color="white"
                key={2}
            />,
            <h3 key={3}>WED</h3>,
            <Day
                color="white"
                key={4}
            />,
            <h3 key={5}>FRI</h3>,
            <Day
                color="white"
                key={6}
            />,
        );

        for (let i = 0; i < 7; i++) {
            yearList.push(<div key = {800 + i} style={{width: "10px"}}/>);
        }

        for (let i = 0; i < numFill; i++) {
            yearList.push(
                <Day
                    color="white"
                    key={7+i}
                />
            );
        }

        let currDay = firstDay;
        let j = 0;
        let weeksOfMonths = [0];

        while (currDay.getFullYear() === year) {
            let titleText = currDay.getFullYear() + "-" 
                + (currDay.getMonth() + 1).toString().padStart(2, "0") 
                    + "-" + (currDay.getDate()).toString().padStart(2, "0");
            
            let today = new Date();
            let isToday = (currDay.setHours(0,0,0,0) === today.setHours(0,0,0,0));
            let firstDayy = new Date(year, 0, 1);

            if (currDay.getDay() === 0 & currDay !== firstDayy) {
                weeksOfMonths.push(currDay.getMonth());
            }

            yearList.push(
                <Day
                    color="#D9D9D9"
                    key={7 + numFill + j}
                    titleText={titleText}
                    isToday={isToday}
                />
            );
            
            j++;
            currDay.setDate(currDay.getDate() + 1);
        }

        let monthCounts = {}

        for (let i = 0; i < weeksOfMonths.length; i++) {
            let num = weeksOfMonths[i];
            monthCounts[num] = monthCounts[num] ? monthCounts[num] + 1 : 1;
        }

        let monthList = [ 
            "JAN", 
            "FEB", 
            "MAR", 
            "APR", 
            "MAY", 
            "JUN", 
            "JUL", 
            "AUG", 
            "SEP", 
            "OCT", 
            "NOV", 
            "DEC" 
        ];

        let monthHeader = [];

        for (let i = 0; i < 12; i++) {
            monthHeader.push(
                <div 
                    className="month-header-month"
                    key={400 + i}
                >
                    <h3>{monthList[i]}</h3>
                </div>
            );

            for (let j = 0; j < (monthCounts[i]-1); j++) {
                monthHeader.push(
                    <div
                        key={500 * j + i}
                        style={{height: '17px', width: '17px'}}
                    />
                );
            }
        }

        return (
            <>
                <div className="year-wrapper">
                    <div className="month-header">
                        {monthHeader}
                    </div>
                    <div className="year-table">
                        {yearList}
                    </div>
                </div>
            </>
        );
    }
}

export default View;