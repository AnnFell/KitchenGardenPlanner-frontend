import {Component, OnInit} from '@angular/core';
import {StockItem} from "../../types/stock-item";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stockItems: StockItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
