import React from 'react';
import ArrowBar from './ArrowBar'
// import View from './View'
import TimeframeBar from './TimeframeBar'
import '../../Styles/Month/Page.css'

class Month extends React.Component {
    state = {
        month: null,
        year: null,
    }

    componentDidMount = () => {
        let today = new Date();

        this.setState({ 
            month: today.getMonth(),
            year: today.getFullYear(),
        });
    }

    setNext = () => {
        if (this.state.month === 11) {
            this.setState({ 
                month: 0,
                year: this.state.year + 1,
            })
        } else {
            this.setState({ 
                month: this.state.month + 1,
            })
        }
    }

    setPrev = () => {
        if (this.state.month === 0) {
            this.setState({ 
                month: 11,
                year: this.state.year - 1,
            })
        } else {
            this.setState({ 
                month: this.state.month - 1,
            })
        }
    }

    render() {
        
        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{height: '5px'}}/>
                    <hr/>
                    <ArrowBar
                        handleLeftClick = { this.setPrev }
                        handleRightClick = { this.setNext }
                        year = { this.state.year}
                        month = { this.state.month }
                    />
                </div>
            </>
        );
    }
}

export default Month;