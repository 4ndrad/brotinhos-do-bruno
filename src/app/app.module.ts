import { ChildGuard } from './guards/child.service';
import { AuthService } from './pages/login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { FieldComponent } from './components/field/field.component';
import { ReturnComponent } from './components/return/return.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { UpdateComponent } from './pages/update/update.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    ButtonComponent,
    TitleComponent,
    FieldComponent,
    ReturnComponent,
    HomeComponent,
    ConsultComponent,
    UpdateComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [AuthService, AuthGuard, ChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
