import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, Subject } from "rxjs";
import { Student } from "../../data/student";
import { ConsultService } from "./consult.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { catchError } from "rxjs/operators";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalService } from "src/app/components/shared/alert-modal/alert-modal.service";

@Component({
  selector: "app-consult",
  templateUrl: "./consult.component.html",
  styleUrls: ["./consult.component.sass"],
})
export class ConsultComponent implements OnInit {
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

  onUpdate(id) {
    this.router.navigate(["update", id], { relativeTo: this.route }).catch(
      error => this.modal.alertDanger("Error redirecting to update")
    );
  }

  onDelete(consult) {
    this.selectedStudent = consult;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: "modal-sm",
    });
  }

  onConfirmDelete() {
    this.service.remove(this.selectedStudent.id).subscribe(
      (success) => {
        this.onRefresh();
        this.deleteModalRef.hide();
        this.modal.alertSuccess("Success in delete student");
      },
      (error) => {
        this.deleteModalRef.hide();
        this.modal.alertDanger("Error in delete student");
      }
    );
  }

  onCancelDelete() {
    this.deleteModalRef.hide();
  }
}
