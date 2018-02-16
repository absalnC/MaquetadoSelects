import React from "react";
//Clase select que crea un elemento select que puede ser modificado dinamicamente
class Select extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let els=[];		
		console.log("options for: "+this.props.name);
		console.log(this.props.options);
		//se creat las etiquetas option con los datos pasados en la propiedad options
		this.props.options.map(el=>{			
			els.push(<option key={el.id} value={el.id}>{el.nombre}</option>);
		})
		return(
			<select name={this.props.name} value={this.props.value} onChange={this.props.manejar}>
				{els}
			</select>			
			);
	}
}

export default Select;