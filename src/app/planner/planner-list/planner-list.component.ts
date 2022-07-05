import {Component, OnInit} from '@angular/core';
import {PlantService} from "../../services/plant.service";
import {Plant} from "../../types/plant";

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.scss']
})
export class PlannerListComponent implements OnInit {
  plantList: Plant[] | undefined;
  monthList: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  currMonthNumber: number = new Date(Date.now()).getMonth();

  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.plantService.getAll().subscribe(
      data => this.plantList = data as Plant[]
    );
  }

  // TODO: remove this
  logMyList() {
    console.log(this.plantList);
  }
}
