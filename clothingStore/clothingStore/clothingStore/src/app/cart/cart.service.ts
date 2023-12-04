import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Clothes } from "../feed/clothes.service";
import { User } from "../auth/user.service";

export class Cart {
    cart_id!: number;
    user!: User; 
    clothes!: Clothes; 
  }

@Injectable({
    providedIn: 'root'
  })
export class CartService {

    private cartUrl: string = 'http://localhost:8080/cart';

    constructor(private http: HttpClient) { }

    addToCart(user_id: number, clothes_id: number): Observable<void>{
        return this.http.post<void>(`${this.cartUrl}/${user_id}/${clothes_id}`, {});
    }

    getItemsForUser(user_id: number): Observable<Cart[]> {
        return this.http.get<Cart[]>(`${this.cartUrl}/${user_id}`);
    } 

    deleteCartItem(cartId: number): Observable<void> {
      const url = `${this.cartUrl}/${cartId}`;
      return this.http.delete<void>(url);
    }

}