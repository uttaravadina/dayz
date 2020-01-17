import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'
import Week from './Components/Week/Page'
import Month from './Components/Month/Page'
import Error from './Components/404'


class App extends React.Component {

	render() {
		return (
			<>
				<Router>
					<div className="App">
						<div className="left-side">
							<div className="top">
								<Header />
								<div style={{height: '25px'}}/>
								<div style={{height: '5px'}}/>
								<Switch>
									<Route exact={true} path='/' render={() => (
										<Week/>
									)}/>
									<Route path='/week' render={() => (
										<Week/>
									)}/>
									<Route path='/month' render={() => (
										<Month/>
									)}/>
									<Route path="*" render={() => (
										<Error/>
									)}/>
								</Switch>
							</div>
						</div>
						<div className="divider"/>
						<div className="right-side">
							<Legend />
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
