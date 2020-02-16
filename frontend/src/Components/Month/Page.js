import React from 'react';
import ArrowBar from '../../Components/ArrowBar';
import View from './View';
import TimeframeBar from '../../Components/TimeframeBar';
import '../../Styles/Month/Page.css';
import { getDays } from '../../Axios/axios_getter';
import { MONTH_LIST } from '../../constants';

async function getData(username, start, end) {
    start = start.toISOString().substr(0,10);
    end = end.toISOString().substr(0,10);
    return getDays("karenying", start, end);
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

class Month extends React.Component {
    
    state = {
        month: null,
        year: null,
        firstDay: null,
        lastDay: null,
        data: null,
        title : null,
    };

    componentDidMount = () => {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let map;
        let title = MONTH_LIST[month] + " " + year;
        getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    month,
                    year,
                    firstDay,
                    lastDay,
                    data: map,
                    title,
                }); 
            }
        );
    };

    changeMonth = (direction) => {
        let month = this.state.month + direction, year = this.state.year;
        if (month === 12) {
            month = 0;
            year += 1;
        }
        if (month === -1) {
            month = 11;
            year -= 1;
        }

        let title = MONTH_LIST[month] + " " + year;
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let map;

        let today = new Date();
        if (firstDay <= today) {
            getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ data: map }); 
            });
        } 
    
        this.setState({ 
            month,
            year,
            firstDay,
            lastDay,
            title
        });
    };

    render() {
        let firstDay = new Date(this.state.year, this.state.month, 1);
        let lastDay = new Date(this.state.year, this.state.month + 1, 0);
        
        return (
            <>
                <div>
                    <TimeframeBar timeframe="month"/>
                    <div style={{ height: '5px' }} />
                    <hr />
                    <ArrowBar
                        handleLeftClick = { this.changeMonth.bind(this, -1) } 
                        handleRightClick = { this.changeMonth.bind(this, +1)  }
                        title = { this.state.title }
                    />
                    <View
                        numFill = { firstDay.getDay() }
                        lastDay = { lastDay.getDate() }
                        year = { this.state.year }
                        month = { this.state.month }
                        map = { this.state.data }
                    />
                </div>
            </>
        );
    }
}

export default Month;