import { AlertModalService } from 'src/app/components/shared/alert-modal/alert-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';
import { ReturnComponent } from './return/return.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    TitleComponent,
    ReturnComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    MenuComponent,
    TitleComponent,
    ReturnComponent
  ]
})
export class ComponentsModule { }
