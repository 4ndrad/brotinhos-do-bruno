import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "./alert-modal.component";

//tipos de estilos
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

@Injectable({
  providedIn: "root",
})
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  //escopo para criação de alerta
  private showAlert(
    type: AlertTypes,
    message: string,
    srcIcon: string,
    nameIcon: string
  ) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.srcIcon = srcIcon;
    bsModalRef.content.nameIcon = nameIcon;
  }

  alertSuccess(message: string, srcIcon: string, nameIcon: string) {
    this.showAlert( AlertTypes.SUCCESS, message, srcIcon, nameIcon);
  }

  alertDanger(message: string, srcIcon: string, nameIcon: string) {
    this.showAlert( AlertTypes.DANGER, message, srcIcon, nameIcon);
  }
}
