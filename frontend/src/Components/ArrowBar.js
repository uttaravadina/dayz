import React from 'react';
import '../Styles/ArrowBar.css'
import { Button, Glyphicon } from 'react-bootstrap';

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `arrow ${direction}` } 
		onClick={ clickFunction }>
		<h1>{ glyph } </h1>
	</div>
);

class ArrowBar extends React.Component {

    render() {
        
        return (
            <>
                <div className="arrow-bar">
                    <Arrow direction="left" glyph="&#8249;"/>
                    <Arrow direction="right" glyph="&#8250;"/>
                    <div className="curr-timeframe">
                        <strong><h1>January 2020</h1></strong>
                    </div>
                </div>
            </>
        );
    }
}

export default ArrowBar;