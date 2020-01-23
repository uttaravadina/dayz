import React from 'react';
import '../Styles/Legend.css';

const LegendModule = ({color, mood}) => {
    return (
        <div className="legend-module">
            <div className="colorbox-container">
                <div className="colorbox"
                    style={{backgroundColor: color}}
                />
            </div>
            <div className="colorbox-label">
                <p>{mood} day</p>
            </div>
        </div>
    )
};

class Legend extends React.Component {

    render() {
        
        return (
            <>
                <div className="legend">
                    <h1>Legend</h1>
                    <div style={{height: '10px'}}/>
                    <LegendModule color="#5171FF" mood="Great"/>
                    <LegendModule color="#8C52FF" mood="Good"/>
                    <LegendModule color="#CB6BE7" mood="Normal"/>
                    <LegendModule color="#FF66C5" mood="Off"/>
                    <LegendModule color="#FF5757" mood="Bad"/>
                </div>
            </>
        );
    }
}

export default Legend;