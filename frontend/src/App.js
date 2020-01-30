import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Legend from './Components/Legend';
import Day from './Components/Day/Page';
import Week from './Components/Week/Page';
import Month from './Components/Month/Page';
import Year from './Components/Year/Page';
import Error from './Components/404';
import { getDays, postDay } from './Axios/axios_getter';

async function test() {
	const result = await getDays("karenying", "2020-01-29", "2020-01-30");
	console.log(result)
}

class App extends React.Component {

	render() {
		
		//test();

		return (
			<>
				<Router>
					<div className="App">
						<div className="left-side">
								<Header />
								<div style={{height: '10px'}}/>
								<Switch>
									<Route path='/day' render={() => (<Day/>)}/>
									<Route exact={true} path='/' render={() => (<Week/>)}/>
									<Route path='/week' render={() => (<Week/>)}/>
									<Route path='/month' render={() => (<Month/>)}/>
									<Route path='/year' render={() => (<Year/>)}/>
									<Route path="*" render={() => (<Error/>)}/>
								</Switch>
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
