import { AlertModalService } from './../shared/alert-modal/alert-modal.service';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.sass"],
})
export class CardComponent implements OnInit {
  @Input()
  enrolloment: number = 0;

  @Input()
  student: string = " ";

  @Input()
  course: string = " ";

  @Input()
  mother: string = " ";

  @Input()
  father: string = " ";

  @Input()
  phone: string = " ";

  @Input()
  email: string = " ";

  constructor(private alertService: AlertModalService) {}

  ngOnInit() {}

  public copyForClipboard(event: MouseEvent): void {
    event.preventDefault();
    const payload: string =
      "Enrolloment Number: " +
      this.enrolloment +
      ", Student Full Name: " +
      this.student +
      ", Course: " +
      this.course +
      ", Mother Full Name: " +
      this.mother +
      ", Father Full Name: " +
      this.father +
      ", Email: " +
      this.email +
      ", Phone: " +
      this.phone 

    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", payload.toString());
      e.preventDefault();
    };

    document.addEventListener("copy", listener, false);
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
    this.alertCopied();
  }

  alertCopied(){
    this.alertService.alertSuccess("Copied content", "../../../../assets/check-circle.svg", "check-circle")
  }
}
