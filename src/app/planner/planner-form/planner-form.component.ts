import {Component, Input, OnInit} from '@angular/core';
import {Plant} from "../../types/plant";
import {PlantService} from "../../services/plant.service";
import {StockService} from "../../services/stock.service";
import {PlannerListComponent} from "../planner-list/planner-list.component";
import {Stock} from "../../types/stock";

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss']
})
export class PlannerFormComponent implements OnInit {
  @Input() plannerList!: PlannerListComponent;

  plant: Plant = {
    id: 0,
    type: {
      id: 0,
      name: "",
      description: "",
      available: true
    },
    date: new Date(Date.now()),
    location: "",
    harvested: false
  }

  stockList: Stock[] | undefined;

  constructor(private plantService: PlantService, private stockService: StockService) {
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
      () => this.plannerList.getAll()
    );
  }
}
