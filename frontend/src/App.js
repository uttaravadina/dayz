import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'
import Week from './Components/Week/Page'
import Month from './Components/Month/Page'

class App extends React.Component {

	render() {
		return (
			<>
				<BrowserRouter>
					<div className="App">
						<div className="left-side">
							<div className="top">
								<Header />
								<div style={{height: '25px'}}/>
								<div style={{height: '5px'}}/>
								<Route exact={true} path='/' render={() => (
									<Week/>
								)}/>
								<Route exact={true} path='/week' render={() => (
									<Week/>
								)}/>
								<Route exact={true} path='/month' render={() => (
									<Month/>
								)}/>
							</div>
							<div className="bottom">
							</div>
						</div>
						<div className="divider"/>
						<div className="right-side">
							<Legend />
						</div>
						
					</div>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
