import React from 'react';

class ColorsPopup extends React.Component {

    render() {
        
        return (
            <>
                <div
                    style={{
                        borderStyle: 'solid',
                        borderWidth: '5px',
                        height: '200px',
                        width: '200px',
                        position: 'absolute',
                        top: '0',
                        left: '0'
                    }}
                    onclick={this.props.closePopup}
                >
                    <h1>THIS IS A POPUP</h1>
                </div>
            </>
        );
    }
}

export default ColorsPopup;