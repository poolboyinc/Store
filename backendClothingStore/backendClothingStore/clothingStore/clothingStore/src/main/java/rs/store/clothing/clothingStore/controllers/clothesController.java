package rs.store.clothing.clothingStore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.store.clothing.clothingStore.entities.Clothes;
import rs.store.clothing.clothingStore.repositories.clothesRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class clothesController {

    @Autowired
    private clothesRepository repository;

    @GetMapping("/clothes")
    public List<Clothes> getAll(){
        return (List<Clothes>) repository.findAll();
    }


}
