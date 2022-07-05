import {Component, Input, OnInit} from '@angular/core';
import {defaultPlantVariable, Plant} from "../../types/plant";
import {PlantService} from "../../services/plant.service";
import {StockService} from "../../services/stock.service";
import {PlannerListComponent} from "../planner-list/planner-list.component";
import {Stock} from "../../types/stock";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {dateToDateYMDString} from "../../types/dateString";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss']
})
export class PlannerFormComponent implements OnInit {
  @Input() plannerList!: PlannerListComponent;

  plant: Plant = {
    ...defaultPlantVariable
  }

  stockList: Stock[] | undefined;

  constructor(private plantService: PlantService, private stockService: StockService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAllStockItems();
  }

  getAllStockItems() {
    this.stockService.getAll().subscribe(
      data => this.stockList = data as Stock[]
    );
  }

  handleSaveButton() {
    this.plantService.save(this.plant).subscribe(
      () => {
        this.plannerList.getAll();
        this.openSnackBar(`Item ${this.plant.type.name} was added to planner`, "Close");
        this.plant = defaultPlantVariable;
      }
    );
  }

  updateDate($event: MatDatepickerInputEvent<unknown, unknown | null>) {
    let date: Date = $event.value as Date;
    this.plant.date = dateToDateYMDString(date);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

}
