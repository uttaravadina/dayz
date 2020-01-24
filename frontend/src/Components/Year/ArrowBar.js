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

class ArrowBar extends React.Component {

    render() {
        
        return (
            <>
                <div className="arrow-bar">
                    <Arrow 
                        direction="left" 
                        glyph={<FaChevronLeft size="25px"/>}
                        clickFunction={this.props.handleLeftClick}/>
                    <Arrow 
                        direction="right" 
                        glyph={<FaChevronRight size="25px"/>}
                        clickFunction={this.props.handleRightClick}/>
                    <div className="curr-timeframe">
                        <h1>{this.props.year}</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default ArrowBar;