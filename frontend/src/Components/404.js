import React from 'react';
import TimeframeBar from './TimeframeBar';

class Error extends React.Component {

    render() {
        
        return (
            <>
                <div>
                    <TimeframeBar />
                    <div style={{ height: '5px' }}/>
                    <hr/>
                    <div style={{ height: '50px' }}/>
                    <div style={{ marginLeft: '50px' }}>
                        <h1 style={{ color: '#737373' }}
                        >
                            oops, something<br/>went wrong 😨
                            </h1>
                    </div>
                </div>
            </>
        );
    }
}

export default Error;