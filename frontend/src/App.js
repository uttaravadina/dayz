import React from 'react';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'

class App extends React.Component {
	render() {
		return (
			<>
				<div className="App">
					<div className="left">
						<div className="top">
							<Header />
						</div>
						<div className="bottom">
						</div>
					</div>
					<div className="right">
						<Legend />
					</div>
					
				</div>
			</>
		);
	}
}

export default App;
