import { ConsultService } from './../pages/consult/consult.service';
import { Student } from "../data/student";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentResolverGuard implements Resolve<Student> {
  constructor(private service: ConsultService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<Student>{
    if (route.params && route.params["id"]) {
      return this.service.loadById(route.params["id"]);
    }

    return of({
      id: null,
      student: null,
      mother: null,
      father: null,
      age: null,
      course: null,
      period: null,
      email: null,
      phone: null
    })
  }
}
