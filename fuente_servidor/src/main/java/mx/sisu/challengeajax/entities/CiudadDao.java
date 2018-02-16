package mx.sisu.challengeajax.entities;

import org.springframework.data.repository.CrudRepository;

import mx.sisu.challengeajax.entities.Ciudad;

import java.util.List;

public interface CiudadDao extends CrudRepository<Ciudad, Long> {
	List<Ciudad> findByEstado_id(int id);
}