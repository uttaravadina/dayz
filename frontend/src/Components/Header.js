import React from 'react';
import '../Styles/Header.css';
import { getNickname } from '../Axios/axios_getter';

class Header extends React.Component {
    state = {
        timeframe: null,
        emoji: null,
        label: null,
        hrsTill: null,
        minsTill: null,
        timerID: null,
        nickname: null,
    };

    componentDidMount = () => {
        this.updateTime();
        this.timerID = setInterval(
            () => this.updateTime(),
            60000
        );
        getNickname().then(nickname => this.setState({ nickname }))
    };

    updateTime = () => {
        let currHour = new Date().getHours();
        let currMin = new Date().getMinutes();
        
        if (currHour >= 6 && currHour <= 11) {
            this.setState({ 
                timeframe: "morning", 
                emoji: "🌅", 
                label: "sunrise", 
            });
        }
        else if (currHour >= 12 && currHour <= 16) {
            this.setState({ 
                timeframe: "afternoon", 
                emoji: "☀️", 
                label: "sun", 
            });
        }
        else if (currHour >= 17 && currHour <= 20) {
            this.setState({ 
                timeframe: "evening", 
                emoji: "🌄", 
                label: "sunset", 
            });
        }
        else {
            this.setState({ 
                timeframe: "night", 
                emoji: "🌙", 
                label: "moon", 
            });
        }

        let hrsTill = 23 - currHour;
        let minsTill = 59 - currMin;

        this.setState({ hrsTill, minsTill });
    };

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    };

    render() {
        const { timeframe, emoji, label, hrsTill, minsTill, nickname } = this.state;

        return (
            <>
                <div className="header">
                    <h1>Good { timeframe }, { nickname } <span role="img" aria-label={label}>{emoji}</span></h1>
                    <p>{ hrsTill } hrs { minsTill } mins till day ends</p>
                </div>
            </>
        );
    }
}

export default Header;