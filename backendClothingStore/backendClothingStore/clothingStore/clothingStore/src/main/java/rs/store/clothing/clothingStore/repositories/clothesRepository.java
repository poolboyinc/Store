package rs.store.clothing.clothingStore.repositories;

import org.springframework.data.repository.CrudRepository;
import rs.store.clothing.clothingStore.entities.Clothes;

public interface clothesRepository extends CrudRepository<Clothes, Integer> {

}
