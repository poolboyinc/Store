import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  errorExists = false;
  errorText = "";

  user: User | null = null;
  isEditing : boolean = false;

  hide=true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserData().subscribe((user: User | null) => {
      this.user = user;
      console.log(user?.user_id);
    });
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    const style = form.value.style;
    const date = form.value.date;
    const phone_number = form.value.phone_number;
  
    const updatedUser: User = { email, password, style, date, phone_number };

    if(this.user && this.user.user_id)
    { 
  
      this.userService.updateUser(this.user.user_id, updatedUser).subscribe(
        (updatedUser) => {
          console.log('User updated:', updatedUser);
          
          this.errorExists = false;
          this.errorText = "";
      
          this.isEditing = false;
  
          this.user = updatedUser;
        },
        (error) => {
          console.error('Error updating user:', error);
         
          this.errorExists = true;
          this.errorText = "Error updating user. Please try again.";
        }
      );
    }
  }
  
  

  enableEdit() {
    if (!this.isEditing) {
      this.errorExists = false;
      this.errorText = "";
    }
    this.isEditing = !this.isEditing;
  }
  
  
}
