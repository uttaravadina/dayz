import React from 'react';
import '../../Styles/Month/View.css';

const Day = ({ date, color, isToday }) => {
    let monthToday = isToday ? "month-today" : "month-notToday";
    
    return (
        <div className="month-module">
            <div className="month-colorbox"
                style={{backgroundColor: color}}
            >
                <div className={monthToday}>
                    <h2>{date}</h2>
                </div>
            </div>
        </div>
        
    )
};

class View extends React.Component {
    
    render() {

        let fill = [];
        for (let i = 0; i < this.props.numFill; i++) {
            fill.push(
                <Day
                    color="white"
                    key={i}
                />
            )
        }

        let days = [];
        let today = new Date ();
        let todayDate = today.getDate();
        let todayMonth = today.getMonth();
        let todayYear = today.getFullYear();


        for (let i = 0; i < this.props.lastDay; i++) {
            let isToday = (i === todayDate & this.props.month === todayMonth && this.props.year === todayYear) 
                
            fill.push(
                <Day
                    date={i+1}
                    color="#D9D9D9"
                    key={this.props.numFill + i}
                    isToday={isToday}
                />
            )
        }
        
        return (
            <>
                <div className="month-wrapper">
                    <div id="table">
                        <h3>SUN</h3>
                        <h3>MON</h3>
                        <h3>TUE</h3>
                        <h3>WED</h3>
                        <h3>THU</h3>
                        <h3>FRI</h3>
                        <h3>SAT</h3>
                        {fill}
                        {days}

                    </div>
                </div>
            </>
        );
    }
}

export default View;