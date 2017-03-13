import { Component } from '@angular/core';

@Component({
  template: `This is my home page
  <button [routerLink]="[{ outlets: { 'modal': ['modal'] } }]">Launch Modal</button>`
})
export class HomeComponent {
}
