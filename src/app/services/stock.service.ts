import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stock} from "../types/stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockItems: Stock[] = [];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("http://localhost:8080/stock")
  }

  save(item: Stock) {
    return this.http.post('http://localhost:8080/stock', item)
  }

  delete(id: number){
    return this.http.delete('http://localhost:8080/stock/' + id)
  }
}
