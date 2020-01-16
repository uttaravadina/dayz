import React from 'react';
// import ArrowBar from './ArrowBar'
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
        
    }

    getNext = () => {
        
    }

    render() {
        
        return (
            <>
                <div>
                    <TimeframeBar/>
                    <div style={{height: '5px'}}/>
                    <hr/>
                    
                </div>
            </>
        );
    }
}

export default Month;