import { ChildGuard } from "./guards/child.service";
import { LoginComponent } from "./pages/login/login.component";
import { UpdateComponent } from "./pages/update/update.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ConsultComponent } from "./pages/consult/consult.component";
import { AuthGuard } from "./guards/auth.guard.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  {
    path: "consult",
    component: ConsultComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ChildGuard],
    children: [  {
      path: "update/:id",
      component: UpdateComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
