import {Component, OnInit} from '@angular/core';
import {StockItem} from "../../types/stock-item";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  // stockItems: StockItem[] = [];
  stockItems: any = [];

  constructor(private stockService: StockService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.stockService.getAll().subscribe(
      data => this.stockItems = data
    )
  }

}
