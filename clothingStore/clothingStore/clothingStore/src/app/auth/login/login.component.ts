import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;

  errorExists = false;
  errorText = "";

  user: User = new User();
  emailList!: string[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void{
    this.userService.getEmails().subscribe((data: string[])=>{this.emailList = data})
    console.log(this.emailList);
  }

  onSubmit(form : NgForm){

    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
    
      if (!this.emailList.includes(email)) {
        this.errorExists = true;
        this.errorText = "Email does not exist in user database!";
      } else {
        
        this.userService.authenticate(email, password).subscribe((response: any) => {
          if (response) { 
            const userData = response as User;
            this.userService.setUserData(userData);
            this.router.navigate(['/feed']);
          } else {
            this.errorExists = true;
            this.errorText = "Please enter the right combination of data!";
          }
        });               
      }
    }
  }
}
          

              
