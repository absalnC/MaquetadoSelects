import React from "react";
import ReactDOM from "react-dom";
import Select from "./select.jsx";
class App extends React.Component{
	constructor(props){
		super(props);
		this.do=new DataObject();
		//default array
		this.defArr=[{id:0,nombre:"Selecciona un valor"}];		
		this.state={
			paises:this.defArr,
			//un id==0 indica que no se ha seleccionado ninguno
			nombre:"",
			edad:"",
			pais:0,
			estado:0,
			ciudad:0,
			estados:this.defArr,
			ciudades:this.defArr,
			vnombre:false,
			vedad:false,
			mensaje:""
		};
		this.cargarPaises();		

	}

	//Funciones de carga, que obtienen los datos del objeto de datos y las asignan a los campos
	//corresponientes de state
	cargarPaises=()=>{
		this.do.getPaises((res)=>
		{
			this.actualizaProp(["paises"],[this.defArr.concat(res)]);
		});
	}

	cargarEstados=(pais)=>{
		if (pais==0){
			this.actualizaProp(["estados"],[this.defArr]);
		}
		this.do.getEstados(pais,(res)=>{
			console.log("got states");
			console.log(res);
			this.actualizaProp(["estados"],[this.defArr.concat(res)]);
		});
		
	}

	cargarCiudades=(estado)=>{
		if(this.state.paisactual==0 || estado==0){
			this.actualizaProp(["ciudades"],[this.defArr])			
		}		
		console.log("cargando estados con id:",estado);
		this.do.getCiudades(estado,(res)=>{
			this.actualizaProp(["ciudades"],[this.defArr.concat(res)]);
		});
	}




	//Manejadores, se activan al cambiar los campos del formulario

	//Para actualizar el estado de nombre y estado no se puede usar actualizaProp ya que
	//se necesita validar el nuevo estado en tiempo real para agregar las clases correspondientes
	manejaNombre=(ev)=>{
		let tmp={};		
		tmp=Object.assign({},this.state);
		tmp.nombre=ev.target.value;
		this.setState(tmp,()=>{this.validarNombre()});

	}
	manejaEdad=(ev)=>{
		this.actualizaProp([ev.target.name],[ev.target.value]);
		let tmp={};		
		tmp=Object.assign({},this.state);
		tmp.edad=ev.target.value;
		this.setState(tmp,()=>this.validarEdad());
	}
	manejaPais=(ev)=>{
		let ap=this.actualizaProp;
		let da=this.defArr;
		if(ev.target.value!=0){
			ap(["pais"],[ev.target.value]);
			this.cargarEstados(ev.target.value);
		}
		else{
			console.log("target value 0");
			ap(["pais","estado","ciudad","estados","ciudades"],[0,0,0,da,da]);
			
		}
	}
	manejaEstado=(ev)=>{
		let ap=this.actualizaProp;
		let da=this.defArr;
		
		if(ev.target.value!=0){
			this.actualizaProp(["estado"],[ev.target.value]);
			this.cargarCiudades(ev.target.value);
		}
		else{
			ap(["estado","ciudad","ciudades"],[0,0,da]);
		}
	}
	manejaCiudad=(ev)=>{
		this.actualizaProp(["ciudad"],[ev.target.value]);
	}

	//Funcion que permite actualizar un solo elemento del objeto state sin tener que 
	//repetir codigo una y otra vez
	//propnames y propvalues deben ser arreglos del mismo tamanio
	actualizaProp=(propnames,propvalues)=>{
		let tmp={};		
		tmp=Object.assign({},this.state)
		propnames.map((el,ind)=>{
			tmp[el]=propvalues[ind];
		})	
		this.setState(tmp);
		console.log("prop actualizada");
		console.log(this.state);
	}





	//Validadores, verifican que los datos presentes en formulario sean de acuerdo al formato requerido
	validarNombre=()=>{
		//Son validos los caracteres del alfabeto espaniol, el punto y el espacio sin distincion de mayus/minus
		//la longitud del nombre debe estar entre 1 y 50 caracteres
		//si el nombre es valido vnombre=true
		let rx=/^[a-z\u00C0-\u00FF. ]{1,50}$/i;
		if(rx.test(this.state.nombre)){
			
			this.actualizaProp(["vnombre"],[true]);
		}
		else{
			this.actualizaProp(["vnombre"],[false]);
		}
	}
	validarEdad=()=>{
		//la edad debe contener solo digitos
		//el valor del digito debe estar entre 18 y 100 anios		
		//si edad es valida agregar vedad=true
		let rx=/^\d+$/;		
		if(rx.test(this.state.edad)&&parseInt(this.state.edad)>17&&parseInt(this.state.edad)<101){
			
			this.actualizaProp(["vedad"],[true]);
		}
		else{
			
			this.actualizaProp(["vedad"],[false]);
		}
	}




	save=(ev)=>{

		//si nombre y edad son validos y se ha seleccionado una ciudad
		if(this.state.vnombre&&this.state.vedad&&this.state.ciudad!=0){
			let data={
				"ciudadId":this.state.ciudad,
				"nombre":this.state.nombre,
				"edad":this.state.edad
			};
			this.do.save(data,(resp)=>{
				alert(resp.resultado);	
			})
		}
		else{
			ev.preventDefault();
			let hd="Alguno de los siguientes requisitos no fue cumplido:\n";
			let r1="Para el nombre se permiten letras, espacios y puntos. Longitud max de 50 caracteres.\n";
			let r2="Para la edad se permite un numero entre 18 y 100 años\n";
			let r3="La ciudad debe estar seleccionada\n";
			alert(hd+r1+r2+r3);
		}
	}





	render(){
		return(
			<div >
				<form onSubmit={this.save} id="cont">
				<h1>Nuevo Usuario</h1>
				<div className="field">
				<input type="text" name="nombre" placeholder="Nombre[Max. 50 caracteres]"  onChange={this.manejaNombre} className={this.state.vnombre?"valid":"invalid"}/>
				</div>
				<div className="field">
				<input type="text" name="nombre" placeholder="Edad [18-100]" onChange={this.manejaEdad} className={this.state.vedad?"valid":"invalid"}/>
				</div>
				<div className="field city">
					<div className="sub">
						<h3>Pais</h3>
						<Select name="pais" value={this.state.pais} options={this.state.paises} manejar={this.manejaPais}/>
					</div>
					<div className="sub">
						<h3>Estado</h3>
						<Select name="estado" value={this.state.estado} options={this.state.estados} manejar={this.manejaEstado}/>
					</div>
					<div className="sub">
						<h3>Ciudad</h3>
						<Select name="ciudad" value={this.state.ciudad} options={this.state.ciudades} manejar={this.manejaCiudad}/>
					</div>
				</div>
				<input type="submit" value="Submit"/>
				</form>
			</div>
			);
	}
}





ReactDOM.render(<App/>,document.getElementById("App"));