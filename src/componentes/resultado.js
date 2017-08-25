var React = require('react')
var ReactDOM = require('react-dom')

class Resultado extends React.Component{
	constructor (props){
		super(props)
	}
	render(){
		if(this.props.ciudad) {
			return (
				<div >
					<h2>La temperatura en {this.props.ciudad} es de {this.props.temp} grados</h2>
				</div>
			)
		} else {
			return (
				<div>
					<h2>Hacé tu búsqueda</h2> 
				</div>
			)
		}
	}
}

export default Resultado;