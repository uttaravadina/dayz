import React from 'react';
import '../Styles/WeekView.css'

const WeekModule = ({ day, date, color }) => (
    <div className="week-module">
        <h3>{day}</h3>
        <h2>{date}</h2>
        <div style={{height: '10px'}}/>
        <div className="week-colorbox"
            style={{backgroundColor: color}}
        />
    </div>
);


    
class WeekView extends React.Component {

    render() {
       
        return (
            <>
                <div className="week">
                    <WeekModule 
                        day="SUN"
                        date={this.props.dates[0]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="MON"
                        date={this.props.dates[1]}
                        color="#CB6BE7"
                    />
                    <WeekModule 
                        day="TUE"
                        date={this.props.dates[2]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="WED"
                        date={this.props.dates[3]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="THU"
                        date={this.props.dates[4]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="FRI"
                        date={this.props.dates[5]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="SAT"
                        date={this.props.dates[6]}
                        color="#D9D9D9"
                    />
                </div>
            </>
        );
    }
}

export default WeekView;