import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'
import TimeFrameBar from './Components/TimeFrameBar'
import Week from './Components/Week'


class App extends React.Component {
	state = {
		selected: "week",
	}

	timeframeCallback = (timeframe) => {
		this.setState({ selected: timeframe })
		console.log(timeframe)
	}

	render() {
		return (
			<>
				<div className="App">
					<div className="left-side">
						<div className="top">
							<Header />
							<div style={{height: '25px'}}/>
							<TimeFrameBar
								getTimeframe={this.timeframeCallback}
							/>
							<div style={{height: '5px'}}/>
							<hr/>
							<div style={{height: '5px'}}/>
							<Week/>
						</div>
						<div className="bottom">
						</div>
					</div>
					<div className="divider"/>
					<div className="right-side">
						<Legend />
					</div>
					
				</div>
			</>
		);
	}
}

export default App;
