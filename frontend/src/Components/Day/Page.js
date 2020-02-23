import React from 'react';
import View from './View';
import TimeframeBar from '../../Components/TimeframeBar';
import ArrowBar from '../../Components/ArrowBar';
import '../../Styles/Day/Page.css';
import { getDays } from '../../Axios/axios_getter';
import { MONTH_LIST } from '../../constants';

async function getData(date) {
    date = date.toISOString().substr(0,10);
    return getDays(date);
}

class Day extends React.Component {

    state = {
        day: null,
        data: null,
        title: null,
    };
    
    componentDidMount = () => {
        let today = new Date();
        today.setHours(0);
        let title = this.createTitle(today);
        let counts = new Array(5).fill(0);
        getData(today)
            .then(output => {
                if (output[0]) {
                    let mood = output[0].mood;
                    counts[mood]++;
                }
                this.setState({ 
                    day: today,
                    data: output[0],
                    title, 
                });
                this.props.setCounts(counts);
            });
    };

    createTitle = (day) => {
        let month = MONTH_LIST[day.getMonth()];
        let year = day.getFullYear();
        return month + ' ' + year;
    };

    changeDay = (direction) => {
        let currDay = this.state.day;
        let day = new Date(currDay.setDate(currDay.getDate() + direction));
        let today = new Date();
        let counts = new Array(5).fill(0);
        today.setHours(0);
        if (day <= today) {
            getData(day)
            .then(output => {
                if (output[0]) {
                    let mood = output[0].mood;
                    counts[mood]++;
                }
                this.setState({ 
                    data: output[0] 
                });
                this.props.setCounts(counts);
            });
            
        } else {
            this.setState({data: null})
        }

        let title = this.createTitle(day);
        this.setState({ day, title });
    };

    render() {

        return (
            <>
                <div>
                    <TimeframeBar timeframe="day"/>
                    <div style={{ height: '5px' }} />
                    <hr />
                    <ArrowBar
                        handleLeftClick = { this.changeDay.bind(this, -1) } 
                        handleRightClick = { this.changeDay.bind(this, +1) }
                        title = { this.state.title } 
                        timeframe = "day"
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