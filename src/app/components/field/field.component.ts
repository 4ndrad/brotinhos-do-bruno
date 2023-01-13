import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.sass"],
})
export class FieldComponent implements OnInit {
  @Input()
  type: string = "";

  @Input()
  skin: string = "";

  @Input()
  name: string = "";

  @Input()
  id: string = "";

  @Input()
  placeholder: string = "";



  constructor() {}

  ngOnInit() {}
}
