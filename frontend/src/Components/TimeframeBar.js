import React from 'react';
import '../Styles/TimeframeBar.css';
import { Link } from 'react-router-dom';

 
class TimeframeBar extends React.Component {

    state = {
        timeframeSelected: null,
    };

    componentDidMount = () => {
        this.setState({ timeframeSelected: this.props.timeframe});
    };

    handleDayClick = () => {

    };

    handleWeekClick = () => {};

    handleMonthClick = () => {};

    handleYearClick = () => {};

    render() {

        const { timeframe } = this.props
       
        return (
            <>
                <div className="timeframe-bar">
                    <div className="timeframe-container" onClick={this.handleDayClick}>
                        <div className={timeframe === 'day'? "timeframe-active" : "timeframe-inactive"}>
                            <h2>
                                <Link 
                                    to="/day" 
                                    className={timeframe === 'day'? "timeframe-no-link" : "timeframe-link"}
                                    style={{textDecoration: 'none'}}
                                >
                                    Day
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleWeekClick}>
                        <div className={timeframe === 'week'? "timeframe-active" : "timeframe-inactive"}>
                            <h2>
                                <Link 
                                    to="/week" 
                                    className={timeframe === 'week'? "timeframe-no-link" : "timeframe-link"}
                                    style={{textDecoration: 'none'}}
                                >
                                    Week
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleMonthClick}>
                        <div className={timeframe === 'month'? "timeframe-active" : "timeframe-inactive"}>
                            <h2>
                                <Link 
                                    to="/month" 
                                    className={timeframe === 'month'? "timeframe-no-link" : "timeframe-link"}
                                    style={{textDecoration: 'none'}}
                                >
                                    Month
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="timeframe-container" onClick={this.handleYearClick}>
                        <div className={timeframe === 'year'? "timeframe-active" : "timeframe-inactive"}>
                            <h2>
                                <Link 
                                    to="/year" 
                                    className={timeframe === 'year'? "timeframe-no-link" : "timeframe-link"}
                                    style={{textDecoration: 'none'}}
                                >
                                    Year
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TimeframeBar;