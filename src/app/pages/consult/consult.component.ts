import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Student } from '../../data/student';
import { ConsultService } from './consult.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass']
})
export class ConsultComponent implements OnInit {

  consult$: Observable<Student[]>
  error$ = new Subject<boolean>()

  consult:Student

  queryField = new FormControl();

  constructor(private service: ConsultService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh(){
    this.consult$ = this.service.list()
    .pipe(
      catchError(error =>{
        console.error(error);
        this.error$.next(true);
        return of();
      })
    )
  }

  onUpdate(id){
    this.router.navigate(['update', id],{relativeTo: this.route})
  }

  search(){
    console.log(this.queryField.value)
  }
}
