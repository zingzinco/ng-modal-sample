import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalComponent } from './modal.component';

import { ModalModule } from 'ng2-bootstrap/modal';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modal', component: ModalComponent, outlet: 'modal' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
