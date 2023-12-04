import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  hide = true;
  style = "";

  errorExists = false;
  errorText = "";

  user: User = new User();
  emailList!: string[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getEmails().subscribe((data: string[])=>{this.emailList = data})
    console.log(this.emailList);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

      const email = form.value.email;
      const password = form.value.password;
      const style = form.value.style;
      const date = form.value.date;
      const phone_number = form.value.phone_number;
  
      const user: User = {  email, password, style: style, date, phone_number };

      if(this.emailList.includes(email)){
        this.errorExists = true;
        this.errorText = "Email already exists!";

      } else {
        this.errorExists = false;
        this.userService.createUser(user).subscribe({
          next: (data) => {
            console.log(data);
            this.redirectToWelcome();
          },
          error: (e) => {
            console.log(e);
          }
        });
      }
    }

  }

  redirectToWelcome() {
    this.router.navigate(['']);
  }

}
