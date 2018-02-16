package mx.sisu.challengeajax.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
//import javax.persistence.JsonBackReference;


import java.util.Set;
import java.util.HashSet;
import mx.sisu.challengeajax.entities.Estado;
@Entity
public class Ciudad{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String nombre;
	
	@ManyToOne
	@JoinColumn(name="estado_id")
	//@JsonBackReference
	private Estado estado;
	
	public int getId(){
		return this.id;
	}

	public String getNombre(){
		return this.nombre;
	}
	/*
	public Estado getEstado(){
		return this.estado;
	}
	
	public void setCiudad_id(int id){
		this.ciudad_id=ciudad_id;
	}
	public void setNombre(String nombre){
		this.nombre=nombre;		
	}
	public void setEstado(int id){
		this.estado.estado=estado;
	}
	*/

}