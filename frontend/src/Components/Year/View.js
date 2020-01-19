import React from 'react';
import '../../Styles/Year/View.css';

const Day = ({ color, isToday, titleText }) => {
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
};

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
            <h3>MON</h3>,
            <Day
                color="white"
                key={1}
            />,
            <h3>WED</h3>,
            <Day
                color="white"
                key={2}
            />,
            <h3>FRI</h3>,
            <Day
                color="white"
                key={3}
            />,
        )

        for (let i = 0; i < numFill; i++) {

            yearList.push(
                <Day
                    color="white"
                    key={4+i}
                />
            )
        }

        let currDay = firstDay;
        let j = 0;

        while (currDay.getFullYear() === year) {
            let titleText = currDay.getFullYear() + "-" 
                + (currDay.getMonth() + 1).toString().padStart(2, '0') 
                + "-" + (currDay.getDate()).toString().padStart(2, '0')
            
            let today = new Date();
            let isToday = (currDay.setHours(0,0,0,0) === today.setHours(0,0,0,0));

            yearList.push(
                <Day
                    color="#D9D9D9"
                    key={4 + numFill + j}
                    titleText={titleText}
                    isToday={isToday}
                />
            )
            j++;
            currDay.setDate(currDay.getDate() + 1);
        }

        return (
            <>
                <div className="year-wrapper">
                    <div className="year-table">
                        {yearList}
                    </div>
                </div>
            </>
        );
    }
}

export default View;