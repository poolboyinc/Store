package rs.store.clothing.clothingStore.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name="clothes")
public class Clothes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int clothes_id;

    private String name;

    private String description;

    private float price;

    private String make;

    private int size;

    public Clothes(int clothes_id, String name, String description, float price) {
        this.clothes_id = clothes_id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.make = make;
        this.size = size;
    }

    private Clothes() {

    }

    public int getClothes_id() {
        return clothes_id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public float getPrice() {
        return price;
    }

    public void setClothes_id(int clothes_id) {
        this.clothes_id = clothes_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
