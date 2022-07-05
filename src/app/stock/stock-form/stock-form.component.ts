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
  plantEventTypes: string[] = Object.keys(PlantEventTypes).filter((v) => isNaN(Number(v)));
  monthNames: string[] = Object.keys(Months).filter((v) => isNaN(Number(v)));

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
      id: undefined,
      type: PlantEventTypes.SOWING_INDOORS,
      startMonth: Months.January,
      endMonth: Months.January
    }
    this.item.periods.push(periodItem);
  }

  removePeriod(period: Period) {
    this.item.periods = this.item.periods.filter(x => period !== x);
  }
}
