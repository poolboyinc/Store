import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from './cart.service';
import { User, UserService } from '../auth/user.service';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: User | null = null;
  userCartItems: Cart[] = [];

  constructor(private cartService: CartService, private userService: UserService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.loadUserCartItems();

    this.userService.getUserData().subscribe((user: User | null) => {
      this.user = user;
    });
  }

  loadUserCartItems() {
    this.userService.getUserData().subscribe(
      (user) => {
        if (user && user.user_id) {
          this.cartService.getItemsForUser(user.user_id).subscribe(
            (data: Cart[]) => {
              this.userCartItems = data;
            },
            (error) => {
              console.error('Error fetching user cart items:', error);
            }
          );
        }
      }
    );
  }

  onDeleteCartItem(cartId: number): void {
    this.cartService.deleteCartItem(cartId).subscribe(
      () => {
        console.log('Cart item deleted successfully.');
        this.userCartItems = this.userCartItems.filter(item => item.cart_id !== cartId);
      },
      error => {
        console.error('Error deleting cart item:', error);
      }
    );
  }  
  
  onPurchase(): void {
    if(this.user && this.user.user_id){
      this.historyService.addToHistory(this.user.user_id).subscribe(
        () => {
          console.log('Items moved to purchase history successfully');
          this.userCartItems = [];
        },
        (error) => {
          console.error('Error moving items to purchase history', error);
        }
      );
    }
  }
  
}
