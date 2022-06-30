import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PlannerComponent} from "./planner/planner.component";

const routes: Routes = [
  {path: "", component: DashboardComponent, pathMatch: "full"},
  {path: "stock", component: StockComponent, pathMatch: "full"},
  {path: "planner", component: PlannerComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
