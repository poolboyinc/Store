import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clothes, ClothesService } from './clothes.service';
import { Router } from '@angular/router';
import { User, UserService } from '../auth/user.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  clothesData: Clothes[] = [];
  filteredClothesData: Clothes[] = [];
  loggedInUser: User | null = null;
  isSearching: boolean = false;
  searchTerm: string = '';
  selectedSearchParameter: string = 'name';

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clothesService.getAll().subscribe((data: Clothes[] | null) => {
      if (data) {
        this.clothesData = data;
        this.filteredClothesData = data; 
      }
    });

    this.userService.getUserData().subscribe((user: User | null) => {
      this.loggedInUser = user;
    });
  }

  onSubmit(form: NgForm) {
    console.log('Submitted!');
  }

  handleAddToCart(clothes_id: number | undefined): void {
    if (clothes_id !== undefined) {
      this.addToCart(clothes_id);
    } else {
      console.error('clothes_id is undefined.');
    }
  }

  addToCart(clothes_id: number) {
    if (this.loggedInUser && this.loggedInUser.user_id) {
      const user_id = this.loggedInUser.user_id;

      this.cartService.addToCart(user_id, clothes_id).subscribe(
        () => {
          console.log('Item added to the cart successfully');
        },
        (error) => {
          console.error('Failed to add item to the cart', error);
        }
      );
    } else {
      console.error('User not logged in or user_id is missing.');
    }
  }

  onSearch(searchTerm: string, parameter: string): void {
    this.isSearching = true;
    this.filteredClothesData = this.clothesData.filter((item) => {
      const propertyValue = item[parameter as keyof Clothes];
  
      if (typeof propertyValue === 'string') {
        return propertyValue.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof propertyValue === 'number') {
        return propertyValue === Number(searchTerm);
      } else {
        return false; 
      }
    });
  }
  
  
  
  
  

  clearSearch(): void {
    this.isSearching = false;
    this.filteredClothesData = this.clothesData;
  }
}
