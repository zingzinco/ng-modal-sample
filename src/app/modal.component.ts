import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

@Component({
  template: `
<div bsModal #childModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <router-outlet></router-outlet>
</div>
  `
})
export class ModalComponent {
  @ViewChild('childModal') modal: ModalDirective;

  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .take(1)
      .subscribe(val => {
        this.modal.show();
      });
  }

  ngOnInit() {
    this.modal.onHidden
      .subscribe(x => {
        this.router.navigate([{ outlets: { modal: null } }]);
      });
  }

  ngOnDestroy() {
    this.modal.hide();
  }
}
