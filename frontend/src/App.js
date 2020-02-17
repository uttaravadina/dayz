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

	render() {

		return (
			<>
				<Router>
					<div className="App">
						<Switch>
							<Route path='/signup' component={Signup} />
							<Route path='/signin' component={Signin} />
							<Route path='/' render={ () => (
								<div className="content">
									<RedirectIfNoAuth />
									<div className="left-side">
										<Header />
										<div style={{ height: '10px' }} />
										<Switch>
											<Route path='/day' component={Day} />
											<Route exact={ true } path='/' component={Week} />
											<Route path='/week' component={Week} />
											<Route path='/month' component={Month} />
											<Route path='/year' component={Year} />
											<Route path="*" component={Error} />
										</Switch>
									</div>
									<div className="divider" />
									<div className="right-side">
										<Legend />
										<SettingsMenu />
									</div>
								</div>
							) } />
						</Switch>
						<Footer />
					</div>
				</Router>
			</>
		);
	}
}

export default App;
