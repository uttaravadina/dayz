import React from 'react';
import '../Styles/Legend.css';

const LegendModule = ({ color, mood, count }) => {
    // change counts depending on which timeframe view selected
    return (
        <div className="legend-module">
            <div className="colorbox-container">
                <div className="colorbox" style={{ backgroundColor: color }}>
                    {/* <h2>{ count }</h2> */}
                </div>
            </div>
            <div className="colorbox-label">
                <p>{ mood } day</p>
            </div>
        </div>
    )
}

class Legend extends React.Component {
 
    render() {
        
        return (
            <>
                <div className="legend">
                    <h1>Legend</h1>
                    <div style={{ height: '10px' }}/>
                    <LegendModule color="#5171FF" mood="Great" count="6" />
                    <LegendModule color="#8C52FF" mood="Good" count="9" />
                    <LegendModule color="#CB6BE7" mood="Normal" count="11" />
                    <LegendModule color="#FF66C5" mood="Off" count="1" />
                    <LegendModule color="#FF5757" mood="Bad" count="0" />
                </div>
            </>
        );
    }
}

export default Legend;