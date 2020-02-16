import React from 'react';
import '../Styles/ArrowBar.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ direction, clickFunction, glyph, titleText }) => (
	<div 
		className={ `arrow ${ direction }` } 
		onClick={ clickFunction }
        title={ titleText }
    >
        <h1>{ glyph }</h1>
	</div>
);

class ArrowBar extends React.Component {

    render() {

        const {handleLeftClick, handleRightClick, title, timeframe} = this.props;
    
        return (
            <>
                <div className="arrow-bar">
                    <Arrow 
                        direction="left" 
                        glyph={ <FaChevronLeft size="25px" /> }
                        clickFunction={ handleLeftClick }
                        titleText={ "Previous day" }
                    />
                    <Arrow 
                        direction="right" 
                        glyph={ <FaChevronRight size="25px" /> }
                        clickFunction={ handleRightClick }
                        titleText={ "Next day" }
                    />
                    <div className="curr-timeframe">
                        <h1>{ title }</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default ArrowBar;