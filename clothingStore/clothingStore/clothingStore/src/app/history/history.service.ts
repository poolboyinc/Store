import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "../auth/user.service";
import { Clothes } from "../feed/clothes.service";

export class History {
    purchase_history_id!: number;
    purchase_date!: Date;
    user!: User;
    clothes!: Clothes;
}


@Injectable({
    providedIn: 'root'
  })
export class HistoryService {

    private historyUrl: string = 'http://localhost:8080/history';

    constructor(private http: HttpClient) { }

    addToHistory(user_id: number): Observable<void>{
        return this.http.post<void>(`${this.historyUrl}/${user_id}`, {});
    }

    getUserHistory(user_id: number): Observable<History[]> {
        return this.http.get<History[]>(`${this.historyUrl}/${user_id}`);
    } 
}