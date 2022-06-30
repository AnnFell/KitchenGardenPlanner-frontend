import {Component, OnInit} from '@angular/core';
import {Plant} from "../../types/plant";
import {PlantService} from "../../services/plant.service";
import {StockItem} from "../../types/stock-item";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss']
})
export class PlannerFormComponent implements OnInit {
  plant: Plant = {
    id: 0,
    type: {
      id: 0,
      name: "",
      description: ""
    },
    date: new Date(Date.now()),
    location: "",
    harvested: false
  }

  stockList: any = [];


  constructor(private plantService: PlantService, private stockService: StockService) {
  }

  ngOnInit(): void {
    this.getAllStockItems();
  }

  getAllStockItems() {
    this.stockService.getAll().subscribe(
      data => this.stockList = data
    );
  }

  handleSaveButton() {
    console.log("Do it!");
  }
}
