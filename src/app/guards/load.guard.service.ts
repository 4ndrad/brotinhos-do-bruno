import { Injectable } from "@angular/core";
import { Router, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../pages/login/auth.service";

@Injectable({
  providedIn: "root",
})
export class LoadGuard implements CanLoad {
  constructor() {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
