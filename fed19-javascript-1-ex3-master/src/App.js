import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

componentDidMount() {
	fetch('http://api.openweathermap.org/data/2.5/weather?q=Lund&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f')
		.then(response => {
			this.setState({
				errorMessage: false,
				report: response.data,
			})
		}
	)
}



	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity />

					{
						this.state.report
						? (
							<WeatherReport />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
