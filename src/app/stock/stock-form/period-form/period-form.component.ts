import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Period} from "../../../types/period";
import {PlantEventTypes} from "../../../types/PlantEventTypes";
import {Months} from "../../../types/months";

@Component({
  selector: 'app-period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.scss']
})
export class PeriodFormComponent implements OnInit {
  @Output() periodEventEmitter = new EventEmitter<Period>();

  period: Period = {
    id: 0,
    type: PlantEventTypes.HARVEST,
    startMonth: Months.January,
    endMonth: Months.January
  }

  plantEventTypes: string[] = Object.keys(PlantEventTypes).filter((v) => isNaN(Number(v)));
  monthNames: string[] = Object.keys(Months).filter((v) => isNaN(Number(v)));

  constructor() {
  }

  ngOnInit(): void {
  }

  updateAfterChange() {
    this.periodEventEmitter.emit(this.period);
  }
}
