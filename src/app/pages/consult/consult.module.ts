import { ConsultService } from './consult.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    ConsultComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports:[
    ConsultComponent,
    UpdateComponent
  ],
  providers:[
    ConsultService
  ]
})
export class ConsultModule { }
