import React from 'react';
import WeekArrowBar from './WeekArrowBar'
import WeekView from './WeekView'
import '../Styles/Week.css'

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
        dates.push(currentDate.getDate());
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

// range = [start, end]
function getInfo(range) {
    let monthList = [ 
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December" ];

    let output = {};
    output.dates = getDates(range);
    output.month = monthList[range[0].getMonth()];
    output.year = range[0].getFullYear();

    return output;
};

class Week extends React.Component {
    state = {
        dates: [],
        month: null,
        year: null,
        weekRange: [],
        isToday: [],
    }

    componentDidMount = () => {
        let today = new Date();

        let currWeek = weekRange(today);        
        let info = getInfo(currWeek);

        let todayy = new Date();
        let isToday = info.dates.map(x => x === todayy.getDate());

        this.setState({ 
            dates: info.dates, 
            month: info.month, 
            year: info.year,
            weekRange: currWeek,
            isToday: isToday,
        }); 
    }

    setNext = () => {
        let currWeek = this.state.weekRange;
        let nextWeek = getNext(currWeek)
        let info = getInfo(nextWeek);

        let todayy = new Date();
        let isToday = info.dates.map(x => x === todayy.getDate());

        this.setState({ 
            dates: info.dates, 
            month: info.month, 
            year: info.year,
            weekRange: currWeek,
            isToday: isToday,
        });
    }

    setPrev = () => {
        let currWeek = this.state.weekRange;
        let prevWeek = getPrev(currWeek)
        let info = getInfo(prevWeek);
        
        let todayy = new Date();
        let isToday = info.dates.map(x => x === todayy.getDate());
        
        this.setState({ 
            dates: info.dates, 
            month: info.month, 
            year: info.year,
            weekRange: currWeek,
            isToday: isToday,
        });
    }

    render() {
        
        return (
            <>
                <div>
                    <WeekArrowBar
                        handleLeftClick = { this.setPrev }
                        handleRightClick = { this.setNext }
                        year = { this.state.year}
                        month = { this.state.month }
                    />
                    <WeekView
                        dates = {this.state.dates}
                        isToday = {this.state.isToday}
                    />
                </div>
            </>
        );
    }
}

export default Week;