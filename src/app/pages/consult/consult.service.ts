import { environment } from './../../../environments/environment';
import { Student } from '../../data/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { pipe } from 'rxjs';
import {tap, delay, take} from  'rxjs/operators'

@Injectable()
export class ConsultService {

  private readonly API = `${environment.API}student`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Student[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadById(id: Student){
    return this.http.get<Student>(`${this.API}/${id}`).pipe(take(1));
  }

  update(student: Student) {
    return this.http.put(`${this.API}/${student.id}`, student).pipe(take(1));
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}
