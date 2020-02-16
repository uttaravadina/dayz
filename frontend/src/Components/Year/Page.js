import React from 'react';
import ArrowBar from '../../Components/ArrowBar';
import View from './View';
import TimeframeBar from '../../Components/TimeframeBar';
import '../../Styles/Year/Page.css';
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

class Year extends React.Component {
    state = {
        year: null,
        data: null,
    };

    componentDidMount = () => {
        let today = new Date();
        let year = today.getFullYear();
        let map;
        let firstDay = new Date(year, 0, 1);
        let lastDay = new Date(year + 1, 0, 0);

        getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ 
                    year,
                    data: map,
                }); 
            }
        );
    };

    changeYear = (direction) => {
        let year = this.state.year + direction;
        let map;
        let firstDay = new Date(year, 0, 1);
        let lastDay = new Date(year + 1, 0, 0);
        let today = new Date();

        if (firstDay <= today) {
            getData("karenying", firstDay, lastDay)
            .then(output => {
                map = dataToMap(output);
                this.setState({ data: map }); 
            });
        } 

        this.setState({ year })
    };

    render() {
        
        return (
            <>
                <div>
                    <TimeframeBar timeframe="year"/>
                    <div style={{ height: '5px' }} />
                    <hr />
                    <ArrowBar
                        handleLeftClick = { this.changeYear.bind(this, -1) } 
                        handleRightClick = { this.changeYear.bind(this, +1)  }
                        title = { this.state.year }
                    />
                    <View
                        year = { this.state.year }
                        map = { this.state.data }
                    />
                </div>
            </>
        );
    }
}

export default Year;