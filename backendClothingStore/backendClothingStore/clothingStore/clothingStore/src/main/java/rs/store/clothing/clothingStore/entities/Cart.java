package rs.store.clothing.clothingStore.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity(name="user_cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cart_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "clothes_id")
    private Clothes clothes;

    public Cart(int cart_id, User user, Clothes clothes) {
        this.cart_id = cart_id;
        this.user = user;
        this.clothes = clothes;
    }

    public Cart() {

    }

    public int getCart_id() {
        return cart_id;
    }

    public User getUser() {
        return user;
    }

    public Clothes getClothes() {
        return clothes;
    }

    public void setCart_id(int cart_id) {
        this.cart_id = cart_id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setClothes(Clothes clothes) {
        this.clothes = clothes;
    }

}
