import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Legend from './Components/Legend';
import Day from './Components/Day/Page';
import Week from './Components/Week/Page';
import Month from './Components/Month/Page';
import Year from './Components/Year/Page';
import Error from './Components/404';
import Footer from './Components/Footer';
import FooterIcon from './Components/FooterIcon';
import SettingsMenu from './Components/SettingsMenu';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { authenticate } from './Axios/axios_getter';

class RedirectIfNoAuth extends React.Component {

    componentDidMount() {
        authenticate().then(status => {
            if (!status) {
                window.location = '/signin';
            }
        });
    }

    render() {
        return null;
    }
}

class App extends React.Component {
    state = {
        counts: [],
        footerActive: false,
    }

    setCounts = (counts) => {
        this.setState({ counts })
    }

    handleFooterIconClick = () => {
        this.setState({ footerActive: true });
    };

    handleFooterCloseClick = () => {
        this.setState({ footerActive: false });
    };

    render() {
        
        return (
            <>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route path='/signup' component={Signup} />
                            <Route path='/signin' component={Signin} />
                            <Route path='/' render={() => (
                                <div className="content">
                                    <RedirectIfNoAuth />
                                    <div className="left-side">
                                        <Header />
                                        <div style={{ height: '10px' }} />
                                        <Switch>
                                            <Route path='/day' render={ () => (<Day setCounts={this.setCounts}/>) } />
                                            <Route exact={ true } path='/' render={ () => (<Week setCounts={this.setCounts}/>) } />
                                            <Route path='/week' render={ () => (<Week setCounts={this.setCounts}/>) } />
                                            <Route path='/month' render={ () => (<Month setCounts={this.setCounts}/>) } />
                                            <Route path='/year' render={ () => (<Year setCounts={this.setCounts}/>) } />
                                            <Route path='*' component={Error} />
                                        </Switch>
                                    </div>
                                    <div className="divider" />
                                    <div className="right-side">
                                        <Legend counts={ this.state.counts }/>
                                        <SettingsMenu />
                                    </div>
                                </div>
                            )} />
                        </Switch>
                        {
                            this.state.footerActive ? 
                            <Footer clickFunction={ this.handleFooterCloseClick }/> : 
                            <FooterIcon clickFunction={ this.handleFooterIconClick }/>
                        }
                    </div>
                </Router>
            </>
        );
    }
}

export default App;
