import React from 'react';
import LegendModule from './LegendModule';
import '../Styles/Legend.css';

class Legend extends React.Component {

    render() {
        
        return (
            <>
                <div className="legend">
                    <h1>Legend</h1>
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