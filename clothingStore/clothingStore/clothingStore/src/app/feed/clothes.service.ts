import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class Clothes {
    clothes_id?: number;
    name?: string;
    description?: string;
    price?: number;
    make?: string;
    size?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ClothesService {

    private clothesUrl = "http://localhost:8080/clothes";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Clothes[] | null> {
        return this.http.get<Clothes[]>(this.clothesUrl).pipe(
            map(response => response || null)
        );
    }
}
