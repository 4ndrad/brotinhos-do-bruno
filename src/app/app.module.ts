import { LoadGuard } from './guards/load.guard.service';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ChildrenGuard } from './guards/children.service';
import { AuthService } from './pages/login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ComponentsModule,
    PagesModule
  ],
  providers: [AuthService, AuthGuard, ChildrenGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
