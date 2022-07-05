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

  handleDeleteButton(id: number) {
    this.plantService.delete(id).subscribe(
      () => this.getAll()
    );
  }

  getPercentageOfMonth(date: string): string {
    let day = parseInt(date.substring(8, 10));
    return ((100 / 31) * day) + "%";
  }

  getColumnsBasedOnDate(date: string) {
    const monthNumber = parseInt(date.substring(5, 7), 10);
    return `${monthNumber}/${monthNumber}`;
  }

  getColumnsBasedOnMonths(startMonth: number, endMonth: number) {
    return `${startMonth}/${endMonth + 1}`;
  }

}
