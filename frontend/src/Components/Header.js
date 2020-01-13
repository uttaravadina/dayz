import React from 'react';
import '../Styles/Header.css'

class Header extends React.Component {

    state = {
        timeframe: '',
        emoji: '',
        hrsTill: '',
        minsTill: '',
        timerID: null,
    }

    componentDidMount = () => {
        this.updateTime()
        this.timerID = setInterval(
            () => this.updateTime(),
            60000
        );
    }

    updateTime = () => {
        let currHour = new Date().getHours();
        let currMin = new Date().getMinutes();
        
        if (currHour >= 6 && currHour <= 12) {
            this.setState({ timeframe: 'morning', emoji: '🌅' });
        }
        else if (currHour >= 13 && currHour <= 17) {
            this.setState({ timeframe: 'afternoon', emoji: '☀️' });
        }
        else if (currHour >= 18 && currHour <= 21) {
            this.setState({ timeframe: 'evening', emoji: '🌄' });
        }
        else {
            this.setState({ timeframe: 'night', emoji: '🌙' });
        }

        let hrsTill = 23 - currHour;
        let minsTill = 59 - currMin;

        this.setState({ hrsTill, minsTill });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { timeframe, emoji, hrsTill, minsTill } = this.state;

        return (
            <>
                <div className='Header'>
                    <h1>Good {timeframe}, Karen {emoji}</h1>
                    <p>{hrsTill} hrs {minsTill} mins till day ends</p>
                </div>
                

            </>
        );
    }
}

export default Header;