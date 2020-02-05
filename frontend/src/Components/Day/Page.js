import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Day/Page.css';
import { getDays } from '../../Axios/axios_getter';

async function getData(username, date) {
    date = date.toISOString().substr(0,10);
    return getDays("karenying", date);
}

class Day extends React.Component {

    state = {
        day: null,
        data: null,
    };

    componentDidMount = () => {
        let today = new Date();
        today.setHours(0);
        getData("karenying", today)
            .then(output => {
                this.setState({ 
                    day: today,
                    data: output[0] 
                });
            });
    };

    setNext = () => {
        let today = this.state.day;
        let tmr = new Date(today.setDate(today.getDate() + 1));
        getData("karenying", tmr)
            .then(output => {
                this.setState({ 
                    day: tmr,
                    data: output[0] 
                });
            });
    };

    setPrev = () => {
        let today = this.state.day;
        let yest = new Date(today.setDate(today.getDate() - 1));
        getData("karenying", yest)
            .then(output => {
                this.setState({ 
                    day: yest,
                    data: output[0] 
                });
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
                        day = { this.state.day } 
                    />
                    <View
                        day = { this.state.day }
                        data = { this.state.data }
                    />
                </div>
            </>
        );
    }
}

export default Day;