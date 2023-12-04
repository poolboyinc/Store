import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../auth/user.service';
import { HistoryService, History } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  user: User | null = null;
  userHistory: History[] = [];

  constructor(private userService: UserService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((user: User | null) => {
      this.user = user;

      if (this.user && this.user.user_id) {
        this.loadUserHistory(this.user.user_id);
      }
    });
  }

  loadUserHistory(user_id: number): void {
    this.historyService.getUserHistory(user_id).subscribe(
      (data: History[]) => {
        this.userHistory = data;
      },
      (error) => {
        console.error('Error fetching user purchase history:', error);
      }
    );
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }
  
}
