import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalComponent } from './modal.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'modal', component: ModalComponent, outlet: 'modal',
    children: [
      { path: '', redirectTo: 'page1', pathMatch: 'full' },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    Page1Component,
    Page2Component
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
