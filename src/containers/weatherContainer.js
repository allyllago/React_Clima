var React = require('react')
var ReactDOM = require('react-dom')
import Input from "../componentes/input.js"
import Resultado from "../componentes/resultado.js"

class WeatherContainer extends React.Component{
	constructor(props) {
		super(props);
		this.onButtonClick = this.onButtonClick.bind(this)
		this.state = {
			ciudad: '',
			temp: ''
		}
	}
	onButtonClick(name){
		var str = "http://api.openweathermap.org/data/2.5/weather?q="
		str+= name
		str+= "&units=METRIC&APPID=39ed2e14db7bdc4c52d143c2c44dbfa5"
		fetch(str, {method:"GET"}).then((data) => data.json()).then((data) => {
			console.log(data)
			console.log(this)
			this.setState({
				ciudad: data.name,
				temp: data.main.temp})
		})	
	}
	render(){
		return (
			<div>
				<Input onButtonClick={this.onButtonClick}/>
				<Resultado ciudad={this.state.ciudad} temp={this.state.temp} />
			</div>
			)
	}
}
ReactDOM.render(<WeatherContainer />, document.getElementById("app"));