import { Observable } from 'rxjs';
import { Student } from '../../data/student';
import { ConsultService } from './consult.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass']
})
export class ConsultComponent implements OnInit {

  consult: Student[];
  consult$: Observable<Student[]>
  queryField = new FormControl();

  constructor(private service: ConsultService) { }

  ngOnInit() {
    this.consult$ = this.service.list();
  }

  search(){
    console.log(this.queryField.value)
  }
}
