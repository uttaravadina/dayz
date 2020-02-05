import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Week/Page.css';
import { getDays } from '../../Axios/axios_getter';

async function getData(username, start, end) {
    start = start.toISOString().substr(0,10);
    end = end.toISOString().substr(0,10);
    // start and end are in greenwich time
  
    return getDays("karenying", start, end);
}

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

function dataToMap(data) {
    let map = {};
    
    data.forEach(x => {
        let day = new Date(x.day).toISOString().substr(0,10);
        let mood = x.mood;
        map[day] = mood;
    });

    return map;
}

class Week extends React.Component {
    
    state = {
        dates: [],
        weekRange: [],
        data: null,
    };

    componentDidMount = () => {
        let today = new Date();
        today.setHours(0);
        let currWeek = weekRange(today);
        let dates = getDates(currWeek);
        let map;
        getData("karenying", currWeek[0], currWeek[1])
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    dates, 
                    weekRange: currWeek,
                    data: map,
                }); 
            }
        );
    };
    
    setNext = () => {
        let currWeek = this.state.weekRange;
        let nextWeek = getNext(currWeek);
        let dates = getDates(nextWeek);
        let map;
        let today = new Date();
        if (nextWeek[0] <= today) {
            getData("karenying", nextWeek[0], nextWeek[1])
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    data: map,
                }); 
            });
        } 
        
        this.setState({ dates });
    };

    setPrev = () => {
        let currWeek = this.state.weekRange;
        let prevWeek = getPrev(currWeek);
        let dates = getDates(prevWeek);
        let map;
        let today = new Date();
        if (prevWeek[0] <= today) {
            getData("karenying", prevWeek[0], prevWeek[1])
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    data: map,
                }); 
            });
        } 
        
        this.setState({ dates });
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
                        map = { this.state.data }
                    />
                </div>
            </>
        );
    }
}

export default Week;