import {Component, OnInit} from '@angular/core';
import {Stock} from "../../types/stock";
import {StockService} from "../../services/stock.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stockList: Stock[] | undefined;
  panelOpenState: boolean = false;

  constructor(private stockService: StockService, private _snackBar: MatSnackBar) {
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
    this.stockService.delete(id).subscribe(
      () => {
        this.getAll();
        this.openSnackBar("Stock item and associated plants in planner are deleted", "Ok");
      }
    );
  }

  archiveStock(item: Stock) {
    item.available = false;
    this.stockService.save(item).subscribe(
      () => {
        this.getAll();
        this.openSnackBar("Stock item was archived", "Ok");
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
