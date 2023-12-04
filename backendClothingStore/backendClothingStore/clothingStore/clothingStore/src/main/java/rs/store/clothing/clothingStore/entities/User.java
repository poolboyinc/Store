package rs.store.clothing.clothingStore.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    private String email;

    private String password;

    private String style;

    private String phone_number;

    private Date date;
    public User(int user_id, String email, String password, String style, String phone_number, Date date) {
        this.user_id = user_id;
        this.email = email;
        this.password = password;
        this.style = style;
        this.phone_number = phone_number;
        this.date = date;
    }

    public User(){

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public Date getDate(){ return date;}

    public void setDate(Date date){
        this.date = date;
    }
}
