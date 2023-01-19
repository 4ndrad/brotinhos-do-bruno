import { Student } from '../../data/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  private readonly API = 'http://localhost:3000/student'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Student[]>(this.API);
  }

}
