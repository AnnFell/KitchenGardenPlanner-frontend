import {Component, OnInit} from '@angular/core';
import {PlantService} from "../services/plant.service";
import {Plant} from "../types/plant";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  plantList: Plant[] = [];


  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    let monthNumber: number = (new Date(Date.now()).getMonth()) + 1;
    console.log(monthNumber);
    this.getHarvestablePlants(monthNumber);
  }

  getHarvestablePlants(monthNumber: number) {
    this.plantService.findHarvestablePlants(monthNumber).subscribe(
      data => {
        this.plantList.push(...data as Plant[]);
        console.log(this.plantList);
      }
    )
  }

}
