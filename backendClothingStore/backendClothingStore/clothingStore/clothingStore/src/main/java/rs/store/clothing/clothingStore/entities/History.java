package rs.store.clothing.clothingStore.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity(name="purchase_history")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int purchase_history_id;

    private Date purchase_date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "clothes_id")
    private Clothes clothes;

    public History(int purchase_history_id, Date purchase_date, User user, Clothes clothes) {
        this.purchase_history_id = purchase_history_id;
        this.purchase_date = purchase_date;
        this.user = user;
        this.clothes = clothes;
    }

    public History(){

    }

    public int getPurchase_history_id() {
        return purchase_history_id;
    }

    public void setPurchase_history_id(int purchase_history_id) {
        this.purchase_history_id = purchase_history_id;
    }

    public Date getPurchase_date() {
        return purchase_date;
    }

    public void setPurchase_date(Date purchase_date) {
        this.purchase_date = purchase_date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Clothes getClothes() {
        return clothes;
    }

    public void setClothes(Clothes clothes) {
        this.clothes = clothes;
    }
}
