import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Week/Page.css';

// start and end are the start and end of week given a date
function weekRange(date) {
    let start = new Date(date.setDate(date.getDate() - date.getDay()));
    let end = new Date(date.setDate(date.getDate() + (6 - date.getDay())));

    return [start, end];
}

// every time press left arrow, take current week and update it with this function call
function getNext(currWeek) {
    let start = new Date(currWeek[0].setDate(currWeek[0].getDate()+7));
    let end = new Date(currWeek[1].setDate(currWeek[1].getDate()+7));

    return [start, end];
}

function getPrev(currWeek) {
    let start = new Date(currWeek[0].setDate(currWeek[0].getDate()-7));
    let end = new Date(currWeek[1].setDate(currWeek[1].getDate()-7));

    return [start, end];
}

// range = [start, end]
// returns only the number dates in the range
function getDates(range) {
    var dates = [],
        currentDate = range[0],
        addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= range[1]) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

class Week extends React.Component {
    state = {
        dates: [],
        weekRange: [],
    }

    componentDidMount = () => {
        let today = new Date();
        let currWeek = weekRange(today);        
        let dates = getDates(currWeek);

        this.setState({ 
            dates: dates, 
            weekRange: currWeek,
        }); 
    };
    
    setNext = () => {
        let currWeek = this.state.weekRange;
        let nextWeek = getNext(currWeek);
        let dates = getDates(nextWeek);

        this.setState({ 
            dates: dates, 
            weekRange: currWeek,
        });
    };

    setPrev = () => {
        let currWeek = this.state.weekRange;
        let prevWeek = getPrev(currWeek);
        let dates = getDates(prevWeek);
        
        this.setState({ 
            dates: dates, 
            weekRange: currWeek,
        });
    };

    render() {

        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{ height: '5px' }}/>
                    <hr/>
                    <ArrowBar
                        handleLeftClick = { this.setPrev }
                        handleRightClick = { this.setNext }
                        dates = { this.state.dates }
                    />
                    <View
                        dates = { this.state.dates }
                    />
                </div>
            </>
        );
    }
}

export default Week;