import React from 'react';
import '../../Styles/ArrowBar.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Arrow = ({direction, clickFunction, glyph}) => (
	<div 
		className={`arrow ${direction}`} 
		onClick={clickFunction}>
            <h1>{glyph}</h1>
	</div>
);

function getTimeframe(firstDay, lastDay) {
    let timeframe;
    let monthList = [ 
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December" 
    ];

    if (firstDay.getMonth() !== lastDay.getMonth()) {
        let firstMonth = monthList[firstDay.getMonth()].slice(0, 3)
        let lastMonth = monthList[lastDay.getMonth()].slice(0, 3)
        if (firstDay.getFullYear() !== lastDay.getFullYear()) {
            timeframe = firstMonth + " " + firstDay.getFullYear() 
                + " - "+ lastMonth + " " + lastDay.getFullYear();
        } else {
            timeframe = firstMonth + " - " + lastMonth + " " + firstDay.getFullYear();
        }
    } else {
        timeframe = monthList[firstDay.getMonth()] + " " + firstDay.getFullYear();
    }

    return timeframe;
}

class ArrowBar extends React.Component {

    render() {
        
        const {dates} = this.props;
        let timeframe;

        if (dates.length) {
            timeframe = getTimeframe(dates[0], dates[6]);
        } 

        return (
            <>
                <div className="arrow-bar">
                    <Arrow 
                        direction="left" 
                        glyph={<FaChevronLeft size="25px"/>}
                        clickFunction={this.props.handleLeftClick}
                    />
                    <Arrow 
                        direction="right" 
                        glyph={<FaChevronRight size="25px"/>}
                        clickFunction={this.props.handleRightClick}
                    />
                    <div className="curr-timeframe">
                        <h1>{timeframe}</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default ArrowBar;