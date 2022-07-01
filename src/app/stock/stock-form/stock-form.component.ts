import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../../types/stock";
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

  item: Stock = {
    id: 0,
    name: "",
    description: "",
    available: true
  }

  constructor(public _stockService: StockService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  handleSaveButton() {
    this._stockService.save(this.item).subscribe(
      result => {
        console.log(result);
        this.openSnackBar(`Stock item ${this.item.name} was added`, "Close");
        this.stockList.getAll();
        this.item = {
          id: 0,
          name: "",
          description: "",
          available: true
        }
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}
