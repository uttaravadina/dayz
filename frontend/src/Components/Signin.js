import React from 'react';
import '../Styles/Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        return (
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-header">
                        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ textAlign: 'center' }}>
                            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username"/><br/>
                            <input type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;