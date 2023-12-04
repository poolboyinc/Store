import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

export class User {
    user_id?: number;
    email!: string;
    password!: string;
    style!: string;
    date!: Date;
    phone_number!: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = 'http://localhost:8080/users';
  private emailsUrl: string = 'http://localhost:8080/emails';

  private userDataSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.usersUrl}`, user);
  }

  getEmails(): Observable<string[]> {
    return this.http.get<string[]>(`${this.emailsUrl}`);
  }

  authenticate(email: string, password: string): Observable<any> {
    const url = `http://localhost:8080/users/${email}/${password}`;
    return this.http.get(url);
  }

  setUserData(userData: User) {
    this.userDataSubject.next(userData);
  }

  getUserData(): Observable<User | null> {
    return this.userDataSubject.asObservable();
  }

  updateUser(id: number, updatedUser: User): Observable<User> {
    const url = `http://localhost:8080/users/update/${id}`;
    return this.http.post<User>(url, updatedUser);
  }
}






