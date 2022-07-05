import {Component, Input, OnInit} from '@angular/core';
import {defaultStockVariable, Stock} from "../../types/stock";
import {StockService} from "../../services/stock.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StockListComponent} from "../stock-list/stock-list.component";
import {LightPreference} from "../../types/LightPreference";
import {PlantEventTypes} from "../../types/PlantEventTypes";
import {Period} from "../../types/period";
import {Months} from "../../types/months";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  @Input() stockList!: StockListComponent;

  item: Stock = {
    ...defaultStockVariable,
  }


  lightTypes: String[] = Object.keys(LightPreference).filter((v) => isNaN(Number(v)));

  constructor(public _stockService: StockService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.addPeriod();

  }

  ngAfterViewInit(): void {
  }

  handleSaveButton() {
    this._stockService.save(this.item).subscribe(
      result => {
        console.log(result);
        this.openSnackBar(`Stock item ${this.item.name} was added`, "Close");
        this.stockList.getAll();
        this.item = {
          ...defaultStockVariable
        };
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

  addPeriod() {
    const periodItem: Period = {
      id: this.item.periods.length,
      type: PlantEventTypes.HARVEST,
      startMonth: Months.January,
      endMonth: Months.January
    }
    this.item.periods.push(periodItem);
  }

  updatePeriod(period: Period) {
    console.log("updating period", period);
    let currentPeriod = this.item.periods.find(x => x.id == period.id);
    if (typeof currentPeriod != undefined) {
      currentPeriod = {...currentPeriod, ...period};
    }

  }
}
