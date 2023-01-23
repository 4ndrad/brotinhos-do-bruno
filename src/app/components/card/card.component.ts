import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { Component, Input, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

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

  @Input()
  password: string = " ";

  BsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

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
      this.phone +
      ", Password: " +
      this.password;

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
    this.BsModalRef = this.modalService.show(AlertModalComponent);
    this.BsModalRef.content.type = 'success';
    this.BsModalRef.content.message = 'Copied content';
    this.BsModalRef.content.srcIcon = '../../../../assets/check-circle.svg';
    this.BsModalRef.content.nameIcon = 'check-circle';
  }
}
