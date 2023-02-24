import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertModalService } from "src/app/components/shared/alert-modal/alert-modal.service";
import { Location } from "@angular/common";
import { ConsultService } from '../consult.service';

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
    private service: ConsultService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    const student = this.route.snapshot.data['student']

    this.formUpdate = this.fb.group({
      id: [student.id],
      student: [
        student.student,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      mother: [
        student.mother,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      father: [
        student.father,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
      age: [
        student.age,
        [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
      ],
      course: [
        student.course,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(35),
        ],
      ],
      period: [
        student.period,
        [Validators.required, Validators.minLength(5), Validators.maxLength(7)],
      ],
      email: [
        student.email,
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(35),
        ],
      ],
      phone: [
        student.period,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(13),
        ],
      ],
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
    this.router.navigate(['/consult'])
  }
}
