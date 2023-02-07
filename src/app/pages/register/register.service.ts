import { Student } from './../../data/student';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly API = `${environment.API}student`

  constructor(private http: HttpClient) { }

  create(student: Student){
    return this.http.post(this.API, student).pipe(take(1))
  }
}
