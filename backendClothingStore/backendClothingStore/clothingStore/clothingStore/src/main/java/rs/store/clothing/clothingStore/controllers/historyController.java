package rs.store.clothing.clothingStore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.store.clothing.clothingStore.entities.Cart;
import rs.store.clothing.clothingStore.entities.History;
import rs.store.clothing.clothingStore.repositories.cartRepository;
import rs.store.clothing.clothingStore.repositories.clothesRepository;
import rs.store.clothing.clothingStore.repositories.historyRepository;
import rs.store.clothing.clothingStore.repositories.usersRepository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class historyController {

    @Autowired
    private userCartController cartController;

    @Autowired
    private historyRepository repository;

    @Autowired
    private cartRepository cartRepository;

    @PostMapping("/history/{user_id}")
    public void addToHistory(@PathVariable int user_id){

        List<Cart> cartItems = cartController.getItemsForUser(user_id);

        for (Cart cartItem : cartItems) {
            History purchaseHistory = new History();
            purchaseHistory.setUser(cartItem.getUser());
            purchaseHistory.setClothes(cartItem.getClothes());
            purchaseHistory.setPurchase_date(new Date());

            repository.save(purchaseHistory);

            cartRepository.delete(cartItem);
        }

    }

    @GetMapping("/history/{user_id}")
    public List<History> getItemsByUserId(@PathVariable int user_id){
        List<History> allItems = (List<History>) repository.findAll();

        List<History> userItems = allItems.stream()
                .filter(cart -> cart.getUser().getUser_id() == user_id)
                .collect(Collectors.toList());

        if (userItems.isEmpty()) {
            return null;
        } else {
            return userItems;
        }
    }
}
