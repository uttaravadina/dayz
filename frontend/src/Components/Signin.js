import React from 'react';
import '../Styles/Signin.css';
import { postLogin } from '../Axios/axios_getter';
import { Link } from 'react-router-dom';

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
        await postLogin(this.state.username)
        .then(() => {window.location = '/'})
        .catch((e) => alert(e))
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
                            <input type="submit" value="Enter" />
                        </div>
                    </form>
                    <div>
                        <p>Don't have an account?<br/>Sign up <Link to="/signup">here</Link>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;