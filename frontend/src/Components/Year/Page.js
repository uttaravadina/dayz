import React from 'react';
import ArrowBar from './ArrowBar';
import View from './View';
import TimeframeBar from './TimeframeBar';
import '../../Styles/Year/Page.css';

class Year extends React.Component {
    state = {
        year: null,
    }

    componentDidMount = () => {
        let today = new Date();

        this.setState({ 
            year: today.getFullYear(),
        });
    };

    setNext = () => {
        this.setState({ 
            year: this.state.year + 1,
        });
    };

    setPrev = () => {
        this.setState({ 
            year: this.state.year - 1,
        });
    };

    render() {
        
        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{height: '5px'}}/>
                    <hr/>
                    <ArrowBar
                        handleLeftClick = {this.setPrev}
                        handleRightClick = {this.setNext}
                        year = { this.state.year}
                    />
                    <View
                        year = {this.state.year}
                    />
                </div>
            </>
        );
    }
}

export default Year;