package rs.store.clothing.clothingStore.repositories;

import org.springframework.data.repository.CrudRepository;
import rs.store.clothing.clothingStore.entities.History;

import java.util.List;

public interface historyRepository extends CrudRepository<History, Integer> {

}
