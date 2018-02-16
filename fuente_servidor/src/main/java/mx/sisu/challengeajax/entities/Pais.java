package mx.sisu.challengeajax.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
//import javax.persistence.JsonBackReference;
import javax.persistence.OneToMany;
import java.util.Set;
import java.util.HashSet;

import mx.sisu.challengeajax.entities.Estado;

@Entity
public class Pais{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String nombre;

	public int getId(){
		return this.id;
	}
	public String getNombre(){
		return this.nombre;
	}

	public void setId(int id){
		this.id=id;
	}
	public void setNombre(String nombre){
		this.nombre=nombre;
	}
	//@OneToMany(mappedBy="pais")
	//private HashSet<Estado> estados= new HashSet<Estado>();

}