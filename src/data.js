
//DataObject se encarga de hacer las peticiones asincronas correspondientes con la api fetch de javascript
//a todas las funciones se les debe pasar un callback para operar con los datos devueltos por la api
function DataObject(){


	this.getPaises=function(callback){
			let datos={};
			fetch("http://localhost:8080/servicio/paises")
			.then(resp=>resp.json())
			.then(resp=>{
				console.log(resp);
				callback(resp);
			})
			.catch(err=>{
				console.log("algo fue mal");
				console.log(err);
			})			
		}


	this.getEstados=function(paisId,callback){
		console.log("passing paisid:",paisId);
		let datos={};
		fetch("http://localhost:8080/servicio/estados",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(paisId)
		})
		.then(resp=>resp.json())
		.then(resp=>{
			callback(resp);
		})
		.catch(err=>{
			console.log("algo fue mal");
			console.log(err);
		})		
	}


	this.getCiudades=function(estadoId,callback){
		let datos={};
		fetch("http://localhost:8080/servicio/ciudades",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(estadoId)
		})
		.then(resp=>resp.json())
		.then(resp=>{callback(resp)})
		.catch(err=>{
			console.log("algo fue mal");
			console.log(err);
		})
	}

	
	this.save=function(datos,callback){
		fetch("http://localhost:8080/servicio/guardar",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(datos)
		})
		.then(resp=>resp.json())
		.then(resp=>{callback(resp)})
		.catch(err=>{
			console.log("algo fue mal");
			console.log(err);
		});
	}
}