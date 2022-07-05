import {Component, OnInit} from '@angular/core';
import {PlantService} from "../services/plant.service";
import {ActivatedRoute} from "@angular/router";
import {defaultPlantVariable} from "../types/plant";
import {defaultStockVariable, Stock} from "../types/stock";
import {DateYMDString} from "../types/dateString";
import {MatSnackBar} from "@angular/material/snack-bar";

type completePlant = {
  id: number;
  type: Stock;
  date: DateYMDString;
  location: string;
  harvested: boolean;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  plant: completePlant = {
    ...defaultPlantVariable,
    type: {
      ...defaultStockVariable,
    }
  };

  constructor(private plantService: PlantService, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plantService.findById(id).subscribe(
      plant => {
        this.plant = plant as completePlant;
        console.log(plant);
      }
    )
  }

  handleHarvestedButton(plant: completePlant) {
    this.plant.harvested = true;
    this.plantService.save(plant).subscribe(
      () => this.openSnackBar(plant.type.name + " is marked as harvested", "Close")
    );

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
