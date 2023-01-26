import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ConsultComponent } from './consult/consult.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    ConsultComponent,
    UpdateComponent,
    LoginComponent
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
    RegisterComponent,
    HomeComponent,
    ConsultComponent,
    UpdateComponent,
    LoginComponent
  ]
})
export class PagesModule { }
