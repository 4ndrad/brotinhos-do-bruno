import { ConsultModule } from './consult/consult.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from './../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ConsultModule
  ],
  exports:[
    RegisterComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule { }
