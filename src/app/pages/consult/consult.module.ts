import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult.component';
import { UpdateComponent } from './update/update.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ConsultComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports:[
    ConsultComponent,
    UpdateComponent
  ]
})
export class ConsultModule { }
