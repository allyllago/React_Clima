var React = require('react')
var ReactDOM = require('react-dom')

class Input extends React.Component{
	constructor (props){
		super(props)
		this.getName = this.getName.bind(this)
	}
	getName(e){
		e.preventDefault();
		var name = this.refs.name.value;
		this.props.onButtonClick(name)
	}
	render(){
		return (
				<div>
					<h1>Averiguá la temperatura</h1>
					<form onSubmit={this.getName}>
						<input type="text" ref="name" placeholder="Nombre de la Ciudad"/>
						<button>Consultar</button>
					</form>
				</div>
				)
	}
};

export default Input;