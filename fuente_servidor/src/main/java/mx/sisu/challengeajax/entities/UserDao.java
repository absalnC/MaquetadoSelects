package mx.sisu.challengeajax.entities;

import org.springframework.data.repository.CrudRepository;

import mx.sisu.challengeajax.entities.User;


public interface UserDao extends CrudRepository<User, Long> {

}