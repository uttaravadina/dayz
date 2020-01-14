import React from 'react';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'
import TimeFrameBar from './Components/TimeFrameBar'


class App extends React.Component {
	render() {
		return (
			<>
				<div className="App">
					<div className="left">
						<div className="top">
							<Header />
							<TimeFrameBar/>
							<hr/>
						</div>
						<div className="bottom">
						</div>
					</div>
					<div className="divider"/>
					<div className="right">
						<Legend />
					</div>
					
				</div>
			</>
		);
	}
}

export default App;
