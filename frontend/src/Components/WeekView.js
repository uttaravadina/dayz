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

function weekRange(date)
{
    let start = date.getDate() - date.getDay() + (date.getDay() === 6 ? -6 : 0);
    let end = date.getDate() - (date.getDay() - 1) + 6;

    return [new Date(date.setDate(start)), new Date(date.setDate(end))];
 
}
    
class WeekView extends React.Component {

    render() {

        const yest = new Date('August 31, 1975 23:15:30');

        let today = new Date();
        console.log(today)
        console.log(today.getDate())
        console.log(today.getDay())

        console.log(weekRange(today))

        return (
            <>
                <div className="week">
                    <WeekModule 
                        day="SUN"
                        date="5"
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="MON"
                        date="6"
                        color="#CB6BE7"
                    />
                    <WeekModule 
                        day="TUE"
                        date="7"
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="WED"
                        date="8"
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="THU"
                        date="9"
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="FRI"
                        date="10"
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="SAT"
                        date="11"
                        color="#D9D9D9"
                    />
                </div>
            </>
        );
    }
}

export default WeekView;