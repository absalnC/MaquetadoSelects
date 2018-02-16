package mx.sisu.challengeajax.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int ciudadId;

	private String nombre;

	private String edad;

	public int getCiudadId(){
		return this.ciudadId;
	}

	public String getNombre(){
		return this.nombre;
	}

	public String getEdad(){
		return this.edad;
	}
	public void setCiudadId(int id){
		this.ciudadId=id;
	}
	public void setNombre(String nombre){
		this.nombre=nombre;
	}
	public void setEdad(String edad){
		this.edad=edad;
	}
}