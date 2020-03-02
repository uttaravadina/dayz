import React from 'react';
import '../../Styles/Year/View.css';
import { MOOD_TO_HEX, DEFAULT_GRAY, MONTH_LIST } from '../../constants';

const Day = ({ color, isToday, titleText }) => {
    let yearToday = isToday ? "year-today" : "year-notToday";
    
    return (
        <div className="year-module" title={ titleText }>
            <div className={ yearToday }>
                <div className="year-colorbox" style={{ backgroundColor: color }}>
                </div>
            </div>
        </div>
    )
}

class View extends React.Component {
    
    render() {
        const { year, map } = this.props;
        let yearList = [];
        let firstDay = new Date(year, 0, 1);
        let numFill = firstDay.getDay();

        yearList.push(
            <Day
                color="white"
                key={ 0 }
            />,
            <h3 key={ 1 }>MON</h3>,
            <Day
                color="white"
                key={ 2 }
            />,
            <h3 key={ 3 }>WED</h3>,
            <Day
                color="white"
                key={ 4 }
            />,
            <h3 key={ 5 }>FRI</h3>,
            <Day
                color="white"
                key={ 6 }
            />,
        );

        for (let i = 0; i < 7; i++) {
            yearList.push(<div key = { 800 + i } style={{ width: "10px" }}/>);
        }

        for (let i = 0; i < numFill; i++) {
            yearList.push(
                <Day
                    color="white"
                    key={ 7+i }
                />
            );
        }

        let currDay = firstDay;
        let j = 0;
        let Jan1st = new Date(year, 0, 1);
        let weeksOfMonths = Jan1st.getDay() === 0 ? [] : [0];

        while (currDay.getFullYear() === year) {
            let titleText = currDay.toISOString().substr(0,10), today = new Date();
            let isToday = (currDay.setHours(0,0,0,0) === today.setHours(0,0,0,0));

            if (currDay.getDay() === 0 & currDay !== Jan1st) {
                weeksOfMonths.push(currDay.getMonth());
            }

            let color = DEFAULT_GRAY;
                if (map && titleText in map && map[titleText] !== -1) {
                    color = MOOD_TO_HEX[map[titleText]];
                }

            yearList.push(
                <Day
                    color={ color }
                    key={ 7 + numFill + j} 
                    titleText={ titleText }
                    isToday={ isToday }
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
        let monthHeader = [];

        for (let i = 0; i < 12; i++) {
            monthHeader.push(
                <div 
                    className="year-month-header-month"
                    key={ 400 + i } 
                >
                    <h3 style={{paddingRight: '2px'}}>{ MONTH_LIST[i].substring(0, 3).toUpperCase() }</h3>
                </div>
            );

            for (let j = 0; j < (monthCounts[i]-1); j++) {
                monthHeader.push(
                    <div
                        key={ 500 * j + i }
                        style={{ height: '17px', width: '17px' }}
                    />
                );
            }
        }

        return (
            <>
                <div className="year-wrapper">
                    <div className="year-month-header">
                        { monthHeader }
                    </div>
                    <div className="year-table">
                        { yearList }
                    </div>
                </div>
            </>
        );
    }
}

export default View;