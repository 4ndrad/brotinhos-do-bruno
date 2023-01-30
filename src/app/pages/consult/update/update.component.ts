import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertModalService } from "src/app/components/shared/alert-modal/alert-modal.service";
import { Location } from "@angular/common";
import { UpdateService } from "./update.service";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.sass"],
})
export class UpdateComponent implements OnInit {
  formUpdate: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: UpdateService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap(id => this.service.loadById(id))
      )
      .subscribe(studant => this.getInformation(studant));

    this.formUpdate = this.fb.group({
      id: [null],
      student: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      mother: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      father: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      age: [
        null,
        [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
      ],
      course: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(35),
        ],
      ],
      period: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(6)],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(35),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(13),
        ],
      ],
    });
  }

  getInformation(student) {
    this.formUpdate.patchValue({
      id: student.id,
      student: student.student,
      mother: student.mother,
      father: student.father,
      age: student.age,
      course: student.course,
      period: student.period,
      email: student.email,
      phone: student.phone,
    });
  }

  hasError(field: string) {
    return this.formUpdate.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formUpdate.value);
    if (this.formUpdate.valid) {
      console.log("submit");
      this.service.update(this.formUpdate.value).subscribe(
        (success) => {
          this.modal.alertSuccess("Success in update");
          this.location.back();
        },
        (error) => this.modal.alertDanger("Error in update"),
        () => console.log("request complete")
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formUpdate.reset();
  }
}
