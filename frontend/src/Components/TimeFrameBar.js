import React from 'react';
import '../Styles/TimeFrameBar.css'
 


class TimeFrameBar extends React.Component {

    state = {
        selected: 'week',
        
    }

    handleDayClick = () => {
        this.setState({ selected: 'day'})
    }

    handleWeekClick = () => {
        this.setState({ selected: 'week'})
    }

    handleMonthClick = () => {
        this.setState({ selected: 'month'})
    }

    handleYearClick = () => {
        this.setState({ selected: 'year'})
    }

    render() {
        let dayActive = this.state.selected === 'day' ? "timeframe-active" : "timeframe-inactive"
        let weekActive = this.state.selected === 'week' ? "timeframe-active" : "timeframe-inactive"
        let monthActive = this.state.selected === 'month' ? "timeframe-active" : "timeframe-inactive"
        let yearActive = this.state.selected === 'year' ? "timeframe-active" : "timeframe-inactive"

        return (
            <>
                <div className="timeframe-bar">
                    <div className="timeframe-container" onClick={this.handleDayClick}>
                        <div className={dayActive}>
                            <h2>Day</h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleWeekClick}>
                        <div className={weekActive}>
                            <h2>Week</h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleMonthClick}>
                        <div className={monthActive}>
                            <h2>Month</h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleYearClick}>
                        <div className={yearActive}>
                            <h2>Year</h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TimeFrameBar;