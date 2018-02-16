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

import mx.sisu.challengeajax.entities.Pais;
import mx.sisu.challengeajax.entities.Ciudad;

@Entity
public class Estado{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String nombre;
	
	@ManyToOne
	@JoinColumn(name="pais_id")
	//@JsonBackReference
	private Pais pais;
	/*
	@OneToMany(mappedBy="estado")
	private Set<Ciudad> ciudades= new HashSet<Ciudad>();
	*/
	public int getId(){
		return this.id;
	}

	public String getNombre(){
		return this.nombre;
	}

	
}