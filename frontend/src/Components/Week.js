import React from 'react';
import WeekArrowBar from './WeekArrowBar'
import WeekView from './WeekView'



import '../Styles/Week.css'

class Week extends React.Component {

    render() {
        
        return (
            <>
                <div>
                    <WeekArrowBar/>
                    <WeekView/>
                </div>
            </>
        );
    }
}

export default Week;