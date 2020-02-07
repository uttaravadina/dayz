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
        let currDay = this.state.day;
        let tmr = new Date(currDay.setDate(currDay.getDate() + 1));
        let today = new Date();
        today.setHours(0);
        if (tmr <= today) {
            getData("karenying", tmr)
            .then(output => {
                this.setState({ 
                    day: tmr,
                    data: output[0] 
                });
            });
        }
        this.setState({ day: tmr });
    };

    setPrev = () => {
        let currDay = this.state.day;
        let yest = new Date(currDay.setDate(currDay.getDate() - 1));
        let today = new Date();
        today.setHours(0);
        if (yest <= today) {
            getData("karenying", yest)
            .then(output => {
                this.setState({ 
                    data: output[0] 
                });
            });
        }
        this.setState({ day: yest });
    };

    render() {

        return (
            <>
                <div>
                    <TimeframeBar />
                    <div style={{ height: '5px' }} />
                    <hr />
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