import React from 'react';
import '../../Styles/Month/View.css';

const Day = ({ date, color, isToday, titleText }) => {
    let monthToday = isToday ? "month-today" : "month-notToday";
    
    return (
        <div 
            className="month-module"
            title={titleText}
        >
            <div className={monthToday}>
                <div className="month-colorbox"
                    style={{backgroundColor: color}}
                >
                    <h2>{date}</h2>
                </div>
            </div>
        </div>
    )
}

class View extends React.Component {
    
    render() {

        let month = [];
        for (let i = 0; i < this.props.numFill; i++) {
            month.push(
                <Day
                    color="white"
                    key={i}
                />
            );
        }

        let today = new Date();

        for (let i = 0; i < this.props.lastDay; i++) {
            let isToday = (i + 1 === today.getDate() 
                & this.props.month === today.getMonth() 
                    && this.props.year === today.getFullYear());

            let titleText = this.props.year + "-" 
                + (this.props.month + 1).toString().padStart(2, '0') 
                    + "-" + (i + 1).toString().padStart(2, '0');
                
            month.push(
                <Day
                    date={i + 1}
                    color="#D9D9D9"
                    key={this.props.numFill + i}
                    isToday={isToday}
                    titleText={titleText}
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
                        {month}
                    </div>
                </div>
            </>
        );
    }
}

export default View;