import React from 'react';
import ArrowBar from '../../Components/ArrowBar';
import View from './View';
import TimeframeBar from '../../Components/TimeframeBar';
import '../../Styles/Page.css';
import { getDays } from '../../Axios/axios_getter';
import { MONTH_LIST } from '../../constants';

async function getData(start, end) {
    start = start.toISOString().substr(0,10);
    end = end.toISOString().substr(0,10);
    // start and end are in greenwich time
  
    return getDays(start, end);
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
        title: null,
    };

    createTitle = (firstDay, lastDay) => {
        let title;

        if (firstDay.getMonth() !== lastDay.getMonth()) {
            let firstMonth = MONTH_LIST[firstDay.getMonth()].slice(0, 3)
            let lastMonth = MONTH_LIST[lastDay.getMonth()].slice(0, 3)
            if (firstDay.getFullYear() !== lastDay.getFullYear()) {
                title = firstMonth + " " + firstDay.getFullYear() 
                    + " - "+ lastMonth + " " + lastDay.getFullYear();
            } else {
                title = firstMonth + " - " + lastMonth + " " + firstDay.getFullYear();
            }
        } else {
            title = MONTH_LIST[firstDay.getMonth()] + " " + firstDay.getFullYear();
        }

        return title;
    };

    componentDidMount = () => {
        let today = new Date();
        today.setHours(0);
        let currWeek = weekRange(today);
        let dates = getDates(currWeek);
        let map;
        let title = this.createTitle(dates[0], dates[6]);
        let counts = new Array(5).fill(0);

        getData(currWeek[0], currWeek[1])
            .then(output => { 
                map = dataToMap(output);
                if (map) {
                    Object.values(map).forEach( value => counts[value]++);
                }
                this.setState({ 
                    dates, 
                    weekRange: currWeek,
                    data: map,
                    title,
                }); 
                this.props.setCounts(counts);
            }
        );
    };

    changeWeek = (direction) => {
        let currWeek = this.state.weekRange;
        let week = (direction === -1) ? getPrev(currWeek) : getNext(currWeek);
        let dates = getDates(week);
        let map;
        let counts = new Array(5).fill(0);
        let today = new Date();
        if (week[0] <= today) {
            getData(week[0], week[1])
            .then(output => {
                map = dataToMap(output);
                Object.values(map).forEach( value => counts[value]++);
                this.props.setCounts(counts);
                this.setState({ 
                    data: map,
                }); 
            });
        } else {
            this.props.setCounts(counts);
        } 

        let title = this.createTitle(dates[0], dates[6])
        this.setState({ dates, title });
    };

    updateMap = (date, mood) => {
        this.setState({
            data: {
                ...this.state.data,
                [date]: mood,
            },
        });
    };

    render() {

        return (
            <>
                <div className="page-container">
                    <TimeframeBar timeframe="week"/>
                    <div style={{ height: '5px' }} />
                    <hr id="hr-fade" />
                    <ArrowBar
                        handleLeftClick = { this.changeWeek.bind(this, -1) } 
                        handleRightClick = { this.changeWeek.bind(this, +1) }
                        title = { this.state.title }
                        timeframe = "week"
                    />
                    <View
                        dates = { this.state.dates }
                        map = { this.state.data }
                        updateMap={ this.updateMap }
                    />
                </div>
            </>
        );
    }
}

export default Week;