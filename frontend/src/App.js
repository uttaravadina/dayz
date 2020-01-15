import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Legend from './Components/Legend'
import TimeFrameBar from './Components/TimeFrameBar'
import ArrowBar from './Components/ArrowBar'



class App extends React.Component {
	render() {
		return (
			<>
				<div className="App">
					<div className="left-side">
						<div className="top">
							<Header />
							<div style={{height: '25px'}}/>
							<TimeFrameBar/>
							<div style={{height: '5px'}}/>
							<hr/>
							<div style={{height: '5px'}}/>
							<ArrowBar/>
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
