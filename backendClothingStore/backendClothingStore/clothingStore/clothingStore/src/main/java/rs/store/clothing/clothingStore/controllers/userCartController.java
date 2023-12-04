package rs.store.clothing.clothingStore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.store.clothing.clothingStore.entities.Cart;
import rs.store.clothing.clothingStore.entities.Clothes;
import rs.store.clothing.clothingStore.entities.User;
import rs.store.clothing.clothingStore.repositories.cartRepository;
import rs.store.clothing.clothingStore.repositories.usersRepository;
import rs.store.clothing.clothingStore.repositories.clothesRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class userCartController {

    @Autowired
    private cartRepository repository;

    @Autowired
    private usersRepository userRepository;

    @Autowired
    private clothesRepository clothesRepository;

    @PostMapping("/cart/{user}/{clothes}")
    public void addToCart(@PathVariable("user") int user_id, @PathVariable("clothes") int clothes_id) throws ChangeSetPersister.NotFoundException {

        User user = userRepository.findById(user_id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());
        Clothes clothes = clothesRepository.findById(clothes_id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        Cart cart = new Cart();

        cart.setUser(user);
        cart.setClothes(clothes);

        repository.save(cart);
    }

    @GetMapping("/cart")
    public List<Cart> getUserItems(){
        return (List<Cart>) repository.findAll();
    }

    @GetMapping("/cart/{user_id}")
    public List<Cart> getItemsForUser(@PathVariable int user_id) {
        List<Cart> allCartItems = (List<Cart>) repository.findAll();

        List<Cart> userCartItems = allCartItems.stream()
                .filter(cart -> cart.getUser().getUser_id() == user_id)
                .collect(Collectors.toList());

        if (userCartItems.isEmpty()) {
            return null;
        } else {
            return userCartItems;
        }
    }

    @DeleteMapping("/cart/{cart_id}")
    public void deleteCartItem(@PathVariable int cart_id) {
        Optional<Cart> cartOptional = repository.findById(cart_id);

        if (cartOptional.isPresent()) {
            repository.deleteById(cart_id);
        }
    }

}
