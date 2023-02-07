import { LoginComponent } from "./pages/login/login.component";
import { UpdateComponent } from "./pages/consult/update/update.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ConsultComponent } from "./pages/consult/consult.component";
import { AuthGuard } from "./guards/auth.guard.service";
import { StudentResolverGuard } from "./guards/student-resolve.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard],
    resolve: { student: StudentResolverGuard },
  },
  {
    path: "consult",
    component: ConsultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "consult/update/:id",
    component: UpdateComponent,
    canActivate: [AuthGuard],
    resolve: { student: StudentResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
