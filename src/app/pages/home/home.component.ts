import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/components/shared/alert-modal/alert-modal.service';
import { Student } from 'src/app/data/student';
import { ConsultService } from '../consult/consult.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild("deleteModal") deleteModal;

  consult$: Observable<Student[]>;
  error$ = new Subject<boolean>();

  selectedStudent: Student;

  queryField = new FormControl();

  constructor(
    private service: ConsultService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private modal: AlertModalService
  ) {}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.consult$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        return of();
      })
    );
  }

}
