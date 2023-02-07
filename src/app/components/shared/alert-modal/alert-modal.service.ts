import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "./alert-modal.component";

//style
export enum AlertTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  LIGHT = "light",
  DARK = "dark",
}

//Icones
export enum Icons {
  CHECK = "../../../../assets/check-circle.svg",
  CHECKBLACK = "../../../../assets/check-circle-fill.svg",
  EXCLAMATION = "../../../../assets/exclamation-triangle.svg",
  EXCLAMATIONBLACK = "../../../../assets/exclamation-triangle-fill.svg",
  INFO = "../../../../assets/info-circle.svg",
  INFOBLACK = "../../../../assets/info-circle-fill.svg"
}

//name icon
export enum NameIcon{
  CHECK = "check-circle",
  CHECKBLACK = "check-circle-fill",
  EXCLAMATION = "exclamation-triangle",
  EXCLAMATIONBLACK = "exclamation-triangle-fill",
  INFO = "info-circle",
  INFOBLACK = "info-circle-fill"
}

@Injectable({
  providedIn: "root",
})
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  //escopo para criação de alerta
  private showAlert(
    message: string,
    type: AlertTypes,
    srcIcon: Icons,
    nameIcon: NameIcon,
    dismissTimeout?: number
  ) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.srcIcon = srcIcon;
    bsModalRef.content.nameIcon = nameIcon;

    if(dismissTimeout){
      setTimeout(() => bsModalRef.hide(), dismissTimeout)
    }
  }

  alertSuccess(message: string) {
    this.showAlert( message,AlertTypes.SUCCESS, Icons.CHECK, NameIcon.CHECK, 3000);
  }

  alertDanger(message: string) {
    this.showAlert( message, AlertTypes.DANGER, Icons.EXCLAMATION, NameIcon.EXCLAMATION);
  }
}
