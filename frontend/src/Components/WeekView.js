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

function weekRange(date) {
    let start = new Date(date.setDate(date.getDate() - date.getDay()));
    let end = new Date(date.setDate(date.getDate() + (6 - date.getDay())));

    return [start, end];
}

function nextWeek(currWeek) {
    
    let start = new Date(currWeek[0].setDate(currWeek[0].getDate()+7));
    let end = new Date(currWeek[1].setDate(currWeek[1].getDate()+7));

    return [start, end];
}

function lastWeek(currWeek) {
    let start = new Date(currWeek[0].setDate(currWeek[0].getDate()-7));
    let end = new Date(currWeek[1].setDate(currWeek[1].getDate()-7));

    return [start, end];
}

var getDates = function(range) {
    var dates = [],
        currentDate = range[0],
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= range[1]) {
      dates.push(currentDate.getDate());
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
};
    
class WeekView extends React.Component {

    state = {
        dates: [],
    }

    componentDidMount = () => {
        let today = new Date();
        let curr_week = weekRange(today);
        this.setState({ dates: getDates(curr_week)})
    }

    render() {
        const {dates} = this.state;
        console.log(dates)

        return (
            <>
                <div className="week">
                    <WeekModule 
                        day="SUN"
                        date={dates[0]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="MON"
                        date={dates[1]}
                        color="#CB6BE7"
                    />
                    <WeekModule 
                        day="TUE"
                        date={dates[2]}
                        color="#8C52FF"
                    />
                    <WeekModule 
                        day="WED"
                        date={dates[3]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="THU"
                        date={dates[4]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="FRI"
                        date={dates[5]}
                        color="#D9D9D9"
                    />
                    <WeekModule 
                        day="SAT"
                        date={dates[6]}
                        color="#D9D9D9"
                    />
                </div>
            </>
        );
    }
}

export default WeekView;