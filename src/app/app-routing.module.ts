import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockComponent} from "./stock/stock.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PlannerComponent} from "./planner/planner.component";
import {DetailComponent} from "./detail/detail.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent, pathMatch: "full"},
  {path: "stock", component: StockComponent, pathMatch: "full"},
  {path: "planner", component: PlannerComponent, pathMatch: "full"},
  {path: "planner/:id", component: DetailComponent, pathMatch: "full"},
  {path: "*", component: LoginComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
