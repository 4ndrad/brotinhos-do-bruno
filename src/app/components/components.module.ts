import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';
import { ReturnComponent } from './return/return.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    TitleComponent,
    ReturnComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    MenuComponent,
    TitleComponent,
    ReturnComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
