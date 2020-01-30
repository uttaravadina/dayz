import React from 'react';
import '../../Styles/Week/View.css';
import ColorsPopup from '../ColorsPopup';

const Day = ({ day, date, isToday, color, titleText, clickFunction }) => {
    let todayActive = isToday ? "today-active" : "today-inactive";
    
    return (
        <div 
            className="week-module"
            title={ titleText }
        >
            <h3>{ day }</h3>
            <div className={ todayActive }>
                <h2>{ date }</h2>
            </div>
            <div style={{ height: '10px' }}/>
            <div className="week-colorbox-container">
                <div className="week-colorbox"
                    style={{ backgroundColor: color }}
                    onClick={ clickFunction }
                />
            </div>
        </div>
    )
}
    
class View extends React.Component {
    
    state = {
        dateSelected: null,
    }

    showColorsPopup = (date) => {
        this.setState({ dateSelected: date });
    };

    closeColorsPopup = () => {
        this.setState({ dateSelected: null });
    };

    /*
    componentWillMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    } */


    render() {

        const { dates, map } = this.props;
        
        let week = [];
        let days = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ];
        
        if (dates.length) {
            for (let i = 0; i < 7; i++) {
                const moodToColor = ["#FF5757", "#FF66C5", "#CB6BE7", "#8C52FF", "#5171FF"];

                let today = new Date();
                let isToday = (dates[i].setHours(0,0,0,0) === today.setHours(0,0,0,0));
                let titleText = dates[i].toISOString().substr(0,10);
                let color;

                console.log(map)
                if (map) {
                    if (titleText in map) {
                        color = moodToColor[map[titleText]];
                    }
                    else {
                        color = "#D9D9D9";
                    }
                }
                else {
                    color = "#D9D9D9";
                }

                week.push(
                    <Day 
                        day={ days[i] }
                        isToday={ isToday }
                        date={ dates[i].getDate() }
                        color={ color }
                        key={ i }
                        titleText = { titleText }
                        clickFunction ={ () => this.showColorsPopup(titleText) }
                    />
                );
            }
        }
        
        return (
            <>
                <div className="week">
                    { week }
                </div>
                {this.state.dateSelected ? (
                    <ColorsPopup
                        closePopup = { this.closeColorsPopup }
                        date={ this.state.dateSelected}
                    />
                ) : null}
            </>
        );
    }
}

export default View;