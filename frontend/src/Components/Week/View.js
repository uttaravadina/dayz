import React from 'react';
import '../../Styles/Week/View.css';
import RatePopup from '../RatePopup';
import EditPopup from '../EditPopup'

const Day = ({ day, date, isToday, color, titleText, clickFunction }) => {
    let todayActive = isToday ? "week-today-active" : "week-today-inactive";
    let fullDate = new Date(titleText);
    let today = new Date();
    today.setHours(0);
    let clickable = fullDate <= today ? "week-colorbox-clickable" : "week-colorbox-not-clickable";

    return (
        <div className="week-module" title={ titleText }>
            <h3>{ day }</h3>
            <div className={ todayActive }>
                <h2>{ date }</h2>
            </div>
            <div style={{ height: '10px' }}/>
            <div className="week-colorbox-container">
                <div 
                    className={clickable}
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
        moodSelected: null,
    };

    showPopup = (date, map) => {
        this.setState({ 
            dateSelected: date,
            moodSelected: map[date], 
        });
    };

    closeRatePopup = () => {
        this.setState({ 
            dateSelected: null,
            moodSelected: null, 
        });
    };

    closeEditPopup = () => {
        this.setState({ 
            dateSelected: null,
            moodSelected: null, 
        });
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
                let fullDate = new Date(titleText);
                let arg = fullDate <= today ? titleText : null;

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
                        clickFunction ={ () => this.showPopup(arg, map) }
                    />
                );
            }
        }

        return (
            <>
                <div className="week">
                    { week }
                </div>
                { (this.state.dateSelected && !this.state.moodSelected) ? 
                    <RatePopup
                        closePopup = { this.closeRatePopup } 
                        date={ this.state.dateSelected}
                    /> 
                : null }
                { (this.state.moodSelected != null) ? 
                    <EditPopup
                        closePopup = { this.closeEditPopup }
                        date={ this.state.dateSelected}
                        moodSelected = { this.state.moodSelected }
                    /> 
                : null }
            </>
        );
    }
}

export default View;