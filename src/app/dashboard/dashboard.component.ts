import {Component, OnInit} from '@angular/core';
import {PlantService} from "../services/plant.service";
import {Plant} from "../types/plant";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  plantList: Plant[] = [];
  currentMonthNumber : number = 1;

  constructor(private plantService: PlantService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.checkIfLoggedIn();

    this.currentMonthNumber = (new Date(Date.now()).getMonth()) + 1;
    this.getHarvestablePlants(this.currentMonthNumber);
  }

  getHarvestablePlants(monthNumber: number) {
    this.plantService.findHarvestablePlants(monthNumber).subscribe(
      data => {
        this.plantList.push(...data as Plant[]);
      }
    )
  }

  checkIfLoggedIn() {
    this.authService.checkIfLoggedIn();
  }

}

