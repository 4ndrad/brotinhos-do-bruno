import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent implements OnInit {

  @Input()
  type:string = "light"

  @Input()
  message:string = " "

  @Input()
  srcIcon:string = " "

  @Input()
  nameIcon:string = " "

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.bsModalRef.hide();
  }

}
