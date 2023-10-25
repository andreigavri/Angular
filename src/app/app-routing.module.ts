import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "auth", component: AuthComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: "", redirectTo: "auth", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
