package rs.store.clothing.clothingStore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.store.clothing.clothingStore.entities.User;
import rs.store.clothing.clothingStore.repositories.usersRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class usersController {

    @Autowired
    private usersRepository repository;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return (List<User>) repository.findAll();
    }

    @GetMapping("/emails")
    public List<String> getAllEmails() { return repository.findAllEmails(); }

    @PostMapping("/users")
    public User newUser(@RequestBody User user){
        return repository.save(user);
    }

    @GetMapping("/users/{email}")
    public User getByEmail(@PathVariable String email){
        return repository.findByEmail(email);
    }

    @GetMapping("/users/{email}/{password}")
    public ResponseEntity<?> authenticate(@PathVariable String email, @PathVariable String password) {
        User user = getByEmail(email);
        if (user != null && user.getPassword().equals(password)) {

            return ResponseEntity.ok(user);
        } else {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/users/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {

        Optional<User> optionalUser = repository.findById(id);

        if (optionalUser != null) {

            User existingUser = optionalUser.get();

            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setStyle(user.getStyle());
            existingUser.setDate(user.getDate());
            existingUser.setPhone_number(user.getPhone_number());


            User updatedUser = repository.save(existingUser);


            return ResponseEntity.ok(updatedUser);
        } else {

            return ResponseEntity.notFound().build();
        }
    }

}
