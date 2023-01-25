import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      student: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mother: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      father: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      age: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      course:[null,[Validators.required, Validators.minLength(5), Validators.maxLength(35)]],
      period: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(6)]],
      email: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(35)]],
      phone: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(13)]]
    })
  }

  hasError(field: string){
    return this.form.get(field).errors
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit')
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset()
  }

}
