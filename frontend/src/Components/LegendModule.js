import React from 'react';
import '../Styles/LegendModule.css'


class LegendModule extends React.Component {

    render() {
        
        return (
            <>
                <div className="legend-module">
                    <div className="colorbox-container">
                        <div className="colorbox"
                            style={{backgroundColor: this.props.color}}
                        />
                    </div>
                    <div className="colorbox-label">
                        <p>{this.props.mood} day</p>
                    </div>
                </div>
            </>
        );
    }
}

export default LegendModule;