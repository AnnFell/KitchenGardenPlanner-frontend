import {Component, OnInit} from '@angular/core';
import {Stock} from "../../types/stock";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] | undefined;

  constructor(private stockService: StockService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.stockService.getAll().subscribe(
      data => this.stockList = data as Stock[]
    )
  }

  deleteStockItem(id: number) {
    console.log("Deleting " + id);
    this.stockService.delete(id).subscribe(
      () => this.getAll()
    );
  }

}
