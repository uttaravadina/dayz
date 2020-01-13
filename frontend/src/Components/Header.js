import React from 'react';

class Header extends React.Component {

    state = {
        timeframe: '',
        emoji: '',
        hrsTill: '',
        minsTill: '',
    }

    componentDidMount = () => {
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

        let hrsTill = 23 - currHour
        let minsTill = 60 - currMin

        this.setState({ hrsTill, minsTill })
    }

    render() {
        const { timeframe, emoji, hrsTill, minsTill } = this.state;

        return (
            <>
                <p>Good {timeframe}, Karen {emoji}</p>
                <p>{hrsTill} hrs {minsTill} mins till day ends</p>

            </>
        );
    }
}

export default Header;