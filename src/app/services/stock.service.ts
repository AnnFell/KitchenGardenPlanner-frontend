import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockItem} from "../types/stock-item";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockItems: StockItem[] = [];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("http://localhost:8080/stock")
  }

  save(item: StockItem) {
    return this.http.post('http://localhost:8080/stock', item)
  }
}
