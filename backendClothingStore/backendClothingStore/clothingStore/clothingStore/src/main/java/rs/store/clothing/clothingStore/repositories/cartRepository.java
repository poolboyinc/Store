package rs.store.clothing.clothingStore.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import rs.store.clothing.clothingStore.entities.Cart;

import java.util.List;

public interface cartRepository extends CrudRepository<Cart, Integer> {

}
