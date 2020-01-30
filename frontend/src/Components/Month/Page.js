import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Month/Page.css';
import { getDays } from '../../Axios/axios_getter';

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
    }

    componentDidMount = () => {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let map;

        getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    month,
                    year,
                    firstDay,
                    lastDay,
                    data: map,
                }); 
            }
        );
    };

    setNext = () => {
        let month, year;
        if (this.state.month === 11) {
            month = 0;
            year = this.state.year + 1;
            
        } else {
            month = this.state.month + 1;
            year = this.state.year;
        }
        
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let map;

        getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    month,
                    year,
                    firstDay,
                    lastDay,
                    data: map,
                }); 
            }
        );
    };

    setPrev = () => {
        let month, year;
        if (this.state.month === 0) {
            month = 11;
            year = this.state.year - 1;
        } else {
            
            month = this.state.month - 1;
            year = this.state.year;

        }

        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let map;

        getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    month,
                    year,
                    firstDay,
                    lastDay,
                    data: map,
                }); 
            }
        );
    };

    render() {
        let firstDay = new Date(this.state.year, this.state.month, 1);
        let lastDay = new Date(this.state.year, this.state.month + 1, 0);

        console.log(this.state);

        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{ height: '5px' }}/>
                    <hr/>
                    <ArrowBar
                        handleLeftClick = { this.setPrev }
                        handleRightClick = { this.setNext }
                        year = { this.state.year }
                        month = { this.state.month }
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