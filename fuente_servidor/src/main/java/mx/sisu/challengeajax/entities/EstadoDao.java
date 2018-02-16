package mx.sisu.challengeajax.entities;

import org.springframework.data.repository.CrudRepository;

import mx.sisu.challengeajax.entities.Estado;
import java.util.List;


public interface EstadoDao extends CrudRepository<Estado, Long> {
	List<Estado> findByPais_id(int id);
}