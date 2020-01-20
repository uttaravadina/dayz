import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Day/Page.css';

class Day extends React.Component {
    state = {
        day: null,
    }

    componentDidMount = () => {
        let today = new Date();

        this.setState({ 
            day: today,
        });
    }

    setNext = () => {
        let today = this.state.day;
        let tmr = new Date(today.setDate(today.getDate() + 1));
        this.setState({ day: tmr});
    }

    setPrev = () => {
        let today = this.state.day;
        let yest = new Date(today.setDate(today.getDate() - 1));
        this.setState({ day: yest});
    }

    render() {

        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{height: '5px'}}/>
                    <hr/>
                    <ArrowBar
                        handleLeftClick = { this.setPrev }
                        handleRightClick = { this.setNext }
                        day = { this.state.day}
                    />
                    <View
                        day = { this.state.day}
                    />
                </div>
            </>
        );
    }
}

export default Day;