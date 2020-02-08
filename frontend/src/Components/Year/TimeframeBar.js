import React from 'react';
import '../../Styles/TimeframeBar.css';
 
class TimeframeBar extends React.Component {

    handleDayClick = () => {};

    handleWeekClick = () => {};

    handleMonthClick = () => {};

    render() {
       
        return (
            <>
                <div className="timeframe-bar">
                    <div className="timeframe-container" onClick={ this.handleDayClick }>
                        <div className="timeframe-inactive">
                            <h2>Day</h2>
                        </div>
                    </div>
                    <div className="timeframe-container" >
                        <div className="timeframe-inactive" onClick={ this.handleWeekClick }>
                            <h2>Week</h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={ this.handleMonthClick }>
                        <div className="timeframe-inactive">
                            <h2>Month</h2>
                        </div>
                    </div>
                    <div className="timeframe-container">
                        <div className="timeframe-active">
                            <h2>Year</h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TimeframeBar;