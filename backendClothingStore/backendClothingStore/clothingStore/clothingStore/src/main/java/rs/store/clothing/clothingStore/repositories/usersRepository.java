package rs.store.clothing.clothingStore.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import rs.store.clothing.clothingStore.entities.User;

import java.util.List;

public interface usersRepository extends CrudRepository<User, Integer> {

    @Query("SELECT u.email FROM users u")
    List<String> findAllEmails();

    User findByEmail(String email);
}
