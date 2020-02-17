import React from 'react';
import '../Styles/Signup.css';
import { postUser } from '../Axios/axios_getter';
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: '', username: '', signedUp: false };

        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNicknameChange(event) {
        this.setState({ nickname: event.target.value });
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await postUser(this.state.nickname, this.state.username)
        .then(() => this.setState(() => ({ signedUp: true })))
        .catch((e) => alert(e))
    }

    render() {
        if (this.state.signedUp === true) {
            alert("User created");
            return <Redirect to='/signin' />
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-header">
                        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div style={{ textAlign: 'center' }}>
                            <input type="text" value={this.state.nickname} onChange={this.handleNicknameChange} placeholder="Nickname"/><br/>
                            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username"/><br/>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;