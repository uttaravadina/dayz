import React from 'react';
import '../../Styles/Week/View.css';
import RatePopup from '../RatePopup';
import EditPopup from '../EditPopup';
import { MOOD_TO_HEX, WEEKDAYS, DEFAULT_GRAY } from '../../constants';

class Day extends React.Component {

    render() {
        const { day, date, isToday, color, titleText, clickFunction } = this.props;
        let todayActive = isToday ? "week-today-active" : "week-today-inactive";
        let fullDate = new Date(titleText);
        let today = new Date();
        today.setHours(0);
        let clickable = fullDate <= today ? "week-colorbox-clickable" : "week-colorbox-not-clickable";
        
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
                    <div 
                        className={clickable}
                        style={{ backgroundColor: color }}
                        onClick={ clickFunction }
                    />
                </div>
            </div>
        );
    }
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

    render() {
        const { dates, map } = this.props;
        
        let week = [];
        
        if (dates.length) {
            for (let i = 0; i < 7; i++) {
                let today = new Date();
                let isToday = (dates[i].setHours(0,0,0,0) === today.setHours(0,0,0,0));
                let titleText = dates[i].toISOString().substr(0,10);
                let fullDate = new Date(titleText);
                let arg = fullDate <= today ? titleText : null;

                let color = DEFAULT_GRAY;
                if (map && titleText in map) {
                    color = MOOD_TO_HEX[map[titleText]];
                }

                week.push(
                    <Day 
                        day={ WEEKDAYS[i] }
                        isToday={ isToday }
                        date={ dates[i].getDate() }
                        color={ color }
                        key={ i }
                        titleText = { titleText }
                        clickFunction ={ () => this.showPopup(arg, map) }
                        addPosition = { this.addPosition }
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
                        updateMap={this.props.updateMap}
                    /> 
                : null }
                { (this.state.moodSelected != null) ? 
                    <EditPopup
                        closePopup = { this.closeEditPopup }
                        date={ this.state.dateSelected}
                        moodSelected = { this.state.moodSelected }
                        updateMap={this.props.updateMap}
                    /> 
                : null }
            </>
        );
    }
}

export default View;