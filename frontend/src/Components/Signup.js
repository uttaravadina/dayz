import React from 'react';
import '../Styles/Signup.css';
import { postUser } from '../Axios/axios_getter';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: '', username: '' };

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
        .then(() => alert("User created"))
        .catch((e) => alert(e))
    }

    render() {

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