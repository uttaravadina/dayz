import React from 'react';
import '../../Styles/ArrowBar.css';

const Arrow = ({direction, clickFunction, glyph}) => (
	<div 
		className={`arrow ${direction}`} 
		onClick={clickFunction}>
            <h1>{glyph}</h1>
	</div>
);

class ArrowBar extends React.Component {

    render() {
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

        let month = monthList[this.props.month];
        
        return (
            <>
                <div className="arrow-bar">
                    <Arrow 
                        direction="left" 
                        glyph="&#8249;"
                        clickFunction={this.props.handleLeftClick}/>
                    <Arrow 
                        direction="right" 
                        glyph="&#8250;"
                        clickFunction={this.props.handleRightClick}/>
                    <div className="curr-timeframe">
                        <h1>{month} {this.props.year}</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default ArrowBar;