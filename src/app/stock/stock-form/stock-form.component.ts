import {Component, Input, OnInit} from '@angular/core';
import {StockItem} from "../../types/stock-item";
import {StockService} from "../../services/stock.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StockListComponent} from "../stock-list/stock-list.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  @Input() stockList!: StockListComponent;

  stockItem: StockItem = {
    id: 0,
    name: "",
    description: ""
  }

  constructor(public _stockService: StockService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  handleSaveButton() {
    this._stockService.save(this.stockItem).subscribe(
      result => {
        console.log(result);
        this.openSnackBar(`Stock item ${this.stockItem.name} was added`, "Close");
        this.stockList.getAll();
        this.stockItem = {
          id: 0,
          name: "",
          description: ""
        }
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
