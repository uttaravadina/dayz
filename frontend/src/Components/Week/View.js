import React from 'react';
import '../../Styles/Week/View.css';

const WeekModule = ({ day, date, isToday, color }) => {
    let todayActive = isToday ? "today-active" : "today-inactive";
    
    return (
        <div className="week-module">
            <h3>{day}</h3>
            <div className={todayActive}>
                <h2>{date}</h2>
            </div>
            
            <div style={{height: '10px'}}/>
            <div className="week-colorbox-container">
                <div className="week-colorbox"
                    style={{backgroundColor: color}}
                />
            </div>
            
        </div>
    )
};
    
class View extends React.Component {

    render() {
        
        return (
            <>
                <div className="week">
                    <WeekModule 
                        day="SUN"
                        isToday={this.props.isToday[0]}
                        date={this.props.dates[0]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="MON"
                        isToay={this.props.isToday[1]}
                        date={this.props.dates[1]}
                        color="#CB6BE7"
                    />
                    <WeekModule 
                        day="TUE"
                        isToday={this.props.isToday[2]}
                        date={this.props.dates[2]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="WED"
                        isToday={this.props.isToday[3]}
                        date={this.props.dates[3]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="THU"
                        isToday={this.props.isToday[4]}
                        date={this.props.dates[4]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="FRI"
                        isToday={this.props.isToday[5]}
                        date={this.props.dates[5]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="SAT"
                        isToday={this.props.isToday[6]}
                        date={this.props.dates[6]}
                        color="#D9D9D9"
                    />
                </div>
            </>
        );
    }
}

export default View;