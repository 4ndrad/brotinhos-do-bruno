import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { Student } from "src/app/data/student";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UpdateService {
  private readonly API = `${environment.API}student`;

  constructor(private http: HttpClient) {}

  loadById(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  update(student: Student) {
    return this.http.put(this.API, student).pipe(take(1));
  }
}
